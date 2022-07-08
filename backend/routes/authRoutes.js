const router = require('express').Router();


const authRoutes = require('../controllers/auth')

router.get("/google", authRoutes.authenticate);

router.get("/google/callback", authRoutes.callBack);


router.get('/login/success', authRoutes.loginSuccess)


router.get("/login/failed", authRoutes.loginFailed);

router.get("/logout", authRoutes.logout);

module.exports = router;