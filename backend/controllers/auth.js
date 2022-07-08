const passport = require('passport')

const CLIENT_URL = 'http://localhost:3000'


exports.authenticate = passport.authenticate("google", { scope: ["profile"] })

exports.callBack = passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
})

exports.loginSuccess = (req, res) => {

    if (req.user) {
        res.status(200).json({
            isSignedIn: true,
            user: req.user._json
        })
    }

}


exports.loginFailed = (req, res) => {
    res.status(401).json({
        isSignedIn: false
    });
}



exports.logout = (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
}