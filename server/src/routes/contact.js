const { Router } = require('express');
const {contactEmail} = require('../mailer');

const router = Router();

router.get('/', (req, res) => {
    res.send(``);
});


router.post('/', contactEmail );



module.exports = router;