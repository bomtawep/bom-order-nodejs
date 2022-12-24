const createImageModel = require('./createImage')
const getImageModel = require('./getImage')
const getImagesModel = require('./getImages')
const deleteImageModel = require('./deleteImage')
const updateImageModel = require('./updateImage')

const createImage = (req: any, res: any) =>  {
  createImageModel.createImagePool(req, res)
}
const getImage = (req: any, res: any) =>  {
  getImageModel.getImagePool(req, res)
}
const getImages = (res: any) =>  {
  getImagesModel.getImagesPool(res)
}
const deleteImage = (req: any, res: any) =>  {
  deleteImageModel.deleteImagePool(req, res)
}
const updateImage = (req: any, res: any) =>  {
  updateImageModel.updateImagePool(req, res)
}

module.exports = {
  createImage,
  getImage,
  getImages,
  deleteImage,
  updateImage
};