import passport from "passport";
import { Strategy } from "passport-local";

passport.use(new Strategy(function verify(username, password, cb) {
    if (username == "Emil") return cb(null, { username, password });
    else return cb(null, false, { message: 'Incorrect username or password.' });
}));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        console.log('serialize');
        return cb(null, {
            username: user.username
        });
    });
});

passport.deserializeUser(function (user, cb) {
    console.log(user);
    process.nextTick(function () {
        console.log('deserialize user');
        return cb(null, user);
    });
});

export default passport;