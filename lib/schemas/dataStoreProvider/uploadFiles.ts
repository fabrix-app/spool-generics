import * as joi from 'joi'
import { uploadFile } from './uploadFile'

export const uploadFiles = joi.array().items(uploadFile)
