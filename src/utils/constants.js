export const BASE_API_URL = 
process.env.NODE_ENV === 'production' ?
'https://pet-hub-app.herokuapp.com'
: 'http://localhost:5005'