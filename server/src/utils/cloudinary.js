const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'dkddnw4le', 
  api_key: '138578197239469', 
  api_secret: '-weQArEszJPyWax6ljfjGOhy3Vw' 
});

module.exports = cloudinary;