const router = require("express").Router();
// const tenantController = require("../../controllers/unitController");
// const formData = require('express-form-data');
const path = require('path');
const upload = require('../../uploadMiddleware');
// const Resize = require('./Resize');

router.get('/', async function (req, res) {
  await res.render('index');
});

router.post('/post', upload.single('image'), async function (req, res) {
  // const imagePath = path.join(__dirname, '/public/images');
  // const fileUpload = new Resize(imagePath);
  // if (!req.file) {
  //   res.status(401).json({error: 'Please provide an image'});
  // }
  // const filename = await fileUpload.save(req.file.buffer);
  // return res.status(200).json({ name: filename });
  
    await console.log('post');

});

// const app = express()
// app.use(formData.parse())

// app.post('api/image-upload', (req, res) => {

//   const values = Object.values(req.files)
  
  
//   Promise
//     .all(promises)
//     .then(results => res.json(results))
// })



module.exports = router;