import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3'

const read = async (limit = undefined) => {
  if (!process.env.BUCKET_NAME) {
    throw new ReferenceError('BUCKET_NAME environmental variable is required.')
  }
  if (typeof process.env.BUCKET_NAME !== 'string') {
    throw new TypeError('BUCKET_NAME must be of type string.')
  }
  if (limit && typeof limit !== 'number') {
    throw new TypeError('Argument must be of type number.')
  }
  try {
    const limitation = limit ? { Limit: limit } : {}
    const values = {
      Bucket: process.env.S3_BUCKET_NAME,
      ...limitation
    }
    const client = new S3Client()
    const command = new ListObjectsCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(`read: ${error}`)
  }
}

export default read
