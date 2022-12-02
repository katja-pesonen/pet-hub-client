export const BASE_API_URL = 
process.env.NODE_ENV === 'production' ?
'https://pet-hub-server-production.up.railway.app'
: 'http://localhost:5005'