
import * as joi from 'joi'
import { uploadFileSuccess as fileSchema } from './uploadFileSuccess'

export const uploadFilesSuccess = joi.array().items(fileSchema)
