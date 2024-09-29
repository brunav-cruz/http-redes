const express = require('express');
const router = express.Router();
const httpCodes = require('../data/http.json');

router.get('/', (req, res) => {
  const codesList = httpCodes.map(code => ({
    code: code.code,
    title: code.title,
    image: code.image
  }));
  res.json(codesList);
});

router.get('/:code', (req, res) => {
  const code = parseInt(req.params.code);
  const httpCode = httpCodes.find(c => c.code === code);

  if (httpCode) {
    res.json(httpCode);
  } else {
    res.status(404).json({ message: 'Código HTTP não encontrado' });
  }
});

module.exports = router;
