import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

const read = async () => {
  if (!process.env.BUCKET_NAME) {
    throw new ReferenceError('BUCKET_NAME environmental variable is required.')
  }
  if (typeof process.env.BUCKET_NAME !== 'string') {
    throw new TypeError('BUCKET_NAME must be of type string.')
  }
  try {
    const client = new S3Client()
    const params = {
      Bucket: process.env.S3_BUCKET_NAME
    }
    const command = new ListObjectsCommand(params)
    return client.send(command)
  } catch (error) {
    throw new Error(`read: ${error}`)
  }
}

export default read
