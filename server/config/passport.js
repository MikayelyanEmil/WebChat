import passport from "passport";
import { Strategy } from "passport-local";

passport.use(new Strategy(function verify(username, password, cb) {
    console.log('Entered verify function');
    if (username == "Emil") return cb(null, { username, password });
    else return cb(null, false, { message: 'Incorrect username or password.' });
}));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, {
            username: user.username
        });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

export default passport;