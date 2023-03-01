export const BASE_API_URL = 
process.env.NODE_ENV === 'production' ?
'https://pet-hub-app.fly.dev'
: 'http://localhost:8080'