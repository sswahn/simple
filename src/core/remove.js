import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'

const remove = async key => {
  if (!process.env.BUCKET_NAME) {
    throw new ReferenceError('BUCKET_NAME environmental variable is required.')
  }
  if (typeof process.env.BUCKET_NAME !== 'string') {
    throw new TypeError('BUCKET_NAME must be of type string.')
  }
  if (typeof key !== 'object') {
    throw new TypeError('Argument must be of type object.')
  }
  try {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key
    }
    const client = new S3Client()
    const command = new DeleteObjectCommand(params)
    return client.send(command)
  } catch (error) {
    throw new Error(`remove: ${error}`)
  }
}

export default remove
