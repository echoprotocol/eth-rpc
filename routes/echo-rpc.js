const express = require('express');
const router = express.Router();
var { getEchoProvider } = require('../services/echo.service');

router.post('/rpc', async function (req, res, next) {

  const echoProvider = await getEchoProvider();
  echoProvider.sendAsync(req.body, (err, result) => {
    res.json(result)
  });

});

module.exports = router;
