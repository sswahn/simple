import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const update = async (data, key) => {
  if (!process.env.BUCKET_NAME) {
    throw new ReferenceError('BUCKET_NAME environmental variable is required.')
  }
  if (typeof process.env.BUCKET_NAME !== 'string') {
    throw new TypeError('BUCKET_NAME must be of type string.')
  }
  if (!key || !newData) {
    throw new TypeError('Both key and newData are required for updateObject.')
  }

  try {
    const client = new S3Client()
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Body: data,
      Key: key
    }
    const command = new PutObjectCommand(params)
    return client.send(command)
  } catch (error) {
    throw new Error(`updateObject: ${error}`)
  }
}

export default update
