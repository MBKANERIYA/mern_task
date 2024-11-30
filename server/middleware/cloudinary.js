const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dacwlu4mo",
  api_key: "129944818669248",
  api_secret: "-lgAtVFQNJk7t3uzjJ7EE4X5zdE",
});

let uploadImage = (path, originalname) => {
  return cloudinary.uploader.upload(
    path,
    { public_id: `${originalname}` },
    function (error, result) {
      return result;
    }
  );
};

module.exports = uploadImage;