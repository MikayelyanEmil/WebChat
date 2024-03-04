import { Router } from 'express';
import passport from '../config/passport.js';

const authRouter = Router();

authRouter.post('/signup', (req, res) => {
    console.log('signup route');
    console.log(req.body);
    res.end();
});

authRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', (error, user, info, status) => {
        if (error) return res.status(500).send('Internal Server Error');

        if (!user) {
            if (info.message === 'Missing credentials') return res.status(400).send(info.message);
            return res.status(401).send(info.message)
        }

        req.login(user, (error) => {
            if (error) return res.status(500).send('Internal Server Error');
            res.status(200).send({message: 'Authenticated successfully'});
        })
    })(req, res, next);
});

export default authRouter;
