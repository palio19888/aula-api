const express = require('express');
const router = express.router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo: 'seja bem vindo',
        data: '15/03/2022'
    })
})

module.exports = router