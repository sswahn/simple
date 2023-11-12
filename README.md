# Simple · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/simple/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/simple)

This library simplifies common CRUD operations using Amazon S3 (Simple Storage Service), providing a convenient and intuitive interface.  

## Features

- **Seamless CRUD Operations**: Perform Create, Read, Update, and Delete operations with minimal effort. The library streamlines S3 interactions.
- **Robust Error Handling**: The library incorporates robust error handling. Receive clear and actionable error messages for quick troubleshooting.

## Installation
Using npm.
```bash
npm install @sswahn/simple
```

## Usage  

### Import
```javascript
import simple from '@sswahn/simple'
```

### Create
Add an object to your S3 bucket.
```javascript
const response = await simple.create(data)
```  

### Read
Retrieve all objects from your S3 bucket. Optionally, set a limit to control the listed number of returned objects.
```javascript
const response = await simple.read(limit)
```

### Read One
Retrieve an individual object from an S3 bucket using a key.
```javascript
const response = await simple.readOne(key)
```  

### Update
Update an existing object in your S3 bucket.
```javascript
const response = await simple.update(data, key)
```

### Remove
Delete an object from your S3 bucket. Provide the key of the object to remove.
```javascript
const response = await simple.remove(key)
```

## Environmental Variables
Ensure the following environmental variables are set:

- BUCKET_NAME: The name of your S3 bucket.

## License
Simple is [MIT Licensed](https://github.com/sswahn/simple/blob/main/LICENSE)
