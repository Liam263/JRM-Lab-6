const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;
const upload = multer({ dest: 'uploads/' })

app.use(cors())

// Handle image upload endpoint
app.post('/upload', upload.single('avatar'), (req, res) => {
  
  console.log('Upload successful')
  res.send('Uploaded file successfully')
  res.json(req.file)
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
