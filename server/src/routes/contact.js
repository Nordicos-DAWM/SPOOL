const { Router } = require('express');
const {contactEmail} = require('../middlewares/mailer');

const router = Router();

router.get('/', (req, res) => {
    res.send(``);
});


router.post('/', contactEmail );



module.exports = router;