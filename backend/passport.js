const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



const GOOGLE_CLIENT_ID = '965585291136-kne8js72sgr6fo1v2r1hiak3082b4q03.apps.googleusercontent.com'

const GOOGLE_CLIENT_SECRET = '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'


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));



passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});