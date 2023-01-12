const createEmpImageModel = require('./createEmpImage')
const getEmpImageModel = require('./getEmpImage')
const getEmpImagesModel = require('./getEmpImages')
const deleteEmpImageModel = require('./deleteEmpImage')
const updateEmpImageModel = require('./updateEmpImage')

const createEmpImage = (req: any, res: any) =>  {
  createEmpImageModel.createEmpImagePool(req, res)
}
const getEmpImage = (req: any, res: any) =>  {
  getEmpImageModel.getEmpImagePool(req, res)
}
const getEmpImages = (res: any) =>  {
  getEmpImagesModel.getEmpImagesPool(res)
}
const deleteEmpImage = (req: any, res: any) =>  {
  deleteEmpImageModel.deleteEmpImagePool(req, res)
}
const updateEmpImage = (req: any, res: any) =>  {
  updateEmpImageModel.updateEmpImagePool(req, res)
}

module.exports = {
  createEmpImage,
  getEmpImage,
  getEmpImages,
  deleteEmpImage,
  updateEmpImage
};