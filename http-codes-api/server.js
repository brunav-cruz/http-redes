const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3122;
const httpCodesRoutes = require('./routes/http');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', httpCodesRoutes);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
