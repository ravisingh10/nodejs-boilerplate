const router = require('express').Router();
const passport = require('passport');

router.get('/callback', passport.authenticate('google'),
    (req, res, next) => {
        if (req.user)
            req.session.user = req.user;
        res.render('post-oauth.ejs');
    }
)

router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

module.exports = router;