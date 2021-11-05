# Node-URL-Shortener-Service
A URL shortener service

# Usage
1. endpoint - POST http://localhost:5000/api/shorten
2. set content-Type to application/json
set body param "originalUrl" to desired long url which needs to be converted in JSON format
3. take the shortUrl generated in response and run it

## Run using docker
docker-compose up --build

## run on local
1. start mongodb server on local
2. in db.config.js file, change uri to 'mongodb://localhost:27017/url-shortener'
3. npm install
4. npm run start
