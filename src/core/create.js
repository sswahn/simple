import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const create = async (data, key) => {
  if (!process.env.BUCKET_NAME) {
    throw new ReferenceError('S3_BUCKET_NAME environmental variable is required.')
  }
  if (typeof process.env.BUCKET_NAME !== 'string') {
    throw new TypeError('BUCKET_NAME must be of type string.')
  }
  if (typeof data !== 'object') {
    throw new TypeError('First argument must be of type object.')
  }
  if (typeof key !== 'object') {
    throw new TypeError('Second argument must be of type object.')
  }
  try {
    const client = new S3Client()
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      Body: data,
    }
    const command = new PutObjectCommand(params)
    const result = await client.send(command)
  } catch (error) {
    throw new Error(`create: ${error}`)
  }
}

export default create
