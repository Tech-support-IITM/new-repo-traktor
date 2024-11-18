const AWS = require('aws-sdk');
const S3 = AWS.S3();
let credentials = {
    accessKeyId: '',
    secretAccessKey: ''
}
let region = 'ap-south-1'
let signatureVersion= 'v4'
const s3 = new S3({
    credentials,
    region,
    signatureVersion
})



