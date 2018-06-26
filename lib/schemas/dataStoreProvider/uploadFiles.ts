
import * as joi from 'joi'
const fileSchema = require('./uploadFile')

export const uploadFiles = joi.array().items(fileSchema)
