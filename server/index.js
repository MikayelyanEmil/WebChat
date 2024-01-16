import 'dotenv/config';
import cors from 'cors';
import express from "express";
import session from 'express-session';
import { createServer } from "http";
import { Server } from "socket.io";
import passport from './config/passport.js';
import authRouter from './routes/auth.js';

const store = new session.MemoryStore();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: [process.env.CLIENT_URL]
    }
});

io.on('connection', socket => {
    console.log('A user connected.');
    socket.on('send-message', message => {
        io.emit('get-message', message);
    });
});

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(session({
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: { maxAge: Number(process.env.COOKIE_EXPIRY) },
    store
}));
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);


app.get('/test', (req, res) => {
    // console.log(req.sessionID);
    // req.session.test = 123;
    console.log(req.user);
    console.log(store);
    res.send({test: 'Test response'})
});



httpServer.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`);
})