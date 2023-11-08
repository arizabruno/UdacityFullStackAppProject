# Udacity's Full Stack Apps on AWS Project

## Project Description

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.


## Postman

The file `RemoteUdacityFullStackAWSFinalProject.postman_collection.json` contains the postman collection with the proper requests. Change the vaue of the variable `jwt_token` to test authorized routes properly.


## Authentication

Use JWT authentication

## Testing Examples

Note: subsitute the tokens values for updated ones.

### Locally

Authenticate:

```
curl --location 'http://localhost:8082/auth/token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.com",
    "password":"securePassword123"
}'
```

Refresh token:

```
curl --location 'http://localhost:8082/auth/refresh' \
--header 'Content-Type: application/json' \
--data '{
    "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ0b2tlblR5cGUiOiJSRUZSRVNIX1RPS0VOIiwiaWF0IjoxNjk4ODUwODQ3LCJleHAiOjE2OTg4NTE0NTF9.Jf8bgNUfiTyJ7ezpT82xHwdNI27y0wNNl7iHGkgabrS1BiY5yZp_a-c6IXDmw8YVkSC10aCed4sT2KWCVogYGmnKnSVJOjFGAh0n-K4nBX9qGjdU4gR7P66MupQlT1IelvobMgt8Eha693gty_wv8FKzXrpuAoyW0SPpn-vJavNMC57hicBy99AnhhtTq9b52rmjlaE8fEXPqaO2IFicdGSouQSW6-Hjmf7Lq0w_TPycQ3E8kwdYRKrZAZEUUyJODw3VmBN7VCSWzfqE3Ui86Vn3dgTe23uW7ebPqtxcyZr07b2D1NuvUQ73Y-_qym_ElFn4UTMrIV4xO4chfS2p2Q"
}'
```

Filter Image:

```
curl --location 'http://localhost:8082/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ0b2tlblR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2OTg4NTI0ODMsImV4cCI6MTY5ODkzODg4M30.BINnkDRIiUeu03hsFXG_Igm2ldSzBHUeN343jpuygQ_7RUE7VqcC_FwIHdqGLpMMRodCDFCz5JVoAdG5Ww6RL423RgxZXrrhI77u5njVm2rOb4iJmD81n9Eq6AcAWRL8JSgOJe82Zqz18jKtFw8nXoCqOk8gCyTvzsOEKY8UGE2OUINcwJjlArsgKaowC-9Lph5J502kfe88tXS1eHcS7JweDXwFFaBN2Mo3tmA_UBv_FVZqYAZFSY0xPqmB2wHv6WHrlaTsOMc4GVHZNe5o64jvXC4BMYtEuTiRJnQ3Tarcltm2ddgb583ahT-cCJgur-wJJIeqyHfo4o88l-zqEw'
```

### AWS

Authenticate:

```
curl --location 'http://image-processing-api-dev.us-east-1.elasticbeanstalk.com/auth/token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.com",
    "password":"securePassword123"
}'
```

Refresh token:

```
curl --location 'http://image-processing-api-dev.us-east-1.elasticbeanstalk.com/auth/refresh' \
--header 'Content-Type: application/json' \
--data '{
    "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ0b2tlblR5cGUiOiJSRUZSRVNIX1RPS0VOIiwiaWF0IjoxNjk4ODUwODQ3LCJleHAiOjE2OTg4NTE0NTF9.Jf8bgNUfiTyJ7ezpT82xHwdNI27y0wNNl7iHGkgabrS1BiY5yZp_a-c6IXDmw8YVkSC10aCed4sT2KWCVogYGmnKnSVJOjFGAh0n-K4nBX9qGjdU4gR7P66MupQlT1IelvobMgt8Eha693gty_wv8FKzXrpuAoyW0SPpn-vJavNMC57hicBy99AnhhtTq9b52rmjlaE8fEXPqaO2IFicdGSouQSW6-Hjmf7Lq0w_TPycQ3E8kwdYRKrZAZEUUyJODw3VmBN7VCSWzfqE3Ui86Vn3dgTe23uW7ebPqtxcyZr07b2D1NuvUQ73Y-_qym_ElFn4UTMrIV4xO4chfS2p2Q"
}'
```

Filter Image:

```
curl --location 'http://image-processing-api-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ0b2tlblR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2OTk0NDQ3NjEsImV4cCI6MTY5OTUzMTE2MX0.b-ixVRWtaWC8I3R75UnHIwUEF5KuvNZFtZbmm--Gq4-qPBm9-LvZ-SRFIdeWwSBI3Z99pK02S1OtjUJV8BcgKlDXMxGaGe1rUOFi4n8vJ4rutMHL5UYvNQTBgReOdcpMNXHLtmRu1Zxmg4V_A_8iOkYdC7x9RReFlCRBYs8fbqtZBQKjhePQDj-35FlzFIyQtjzdDGWTW-3Ky5n25T3B9kkX27D9eUS_cPdD68yRBKA_lhCCgGYQPN4hZkOJEoQcS65G2vQVipAOqxIqashfT16IZyzmWg5jne7sdYBW8Q14TlazAw64pdnzpXxuQ4Mjf3CqTW1H1AguCOzn1KNGxA'
```


### Environment properties

`ACCESS_TOKEN_EXPIRY` set to `1d`

`REFRESH_TOKEN_EXPIRY` set to `30d`

`DATABASE_URL` set to the correct aws RDS connection string.

