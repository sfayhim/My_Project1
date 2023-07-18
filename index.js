const express = require('express');
const path = require('path'); 
const router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../Views/home.html'));
  });
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname+'/../Views/about.html'));
});
module.exports = router;
  
