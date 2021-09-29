const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYyOTEzMjQwNSwiaWF0IjoxNjI5MTMyNDA1fQ.zh6KPeoVAQEONugytnpimqHD0LupkmSFv-cFlG4g5VY",
  mongoUri: process.env.MONGODB_URI ||
  process.env.MONGO_HOST ||
  "mongodb+srv://codeify:mongo123@codeify.skf4j.mongodb.net/codeify?retryWrites=true&w=majority"
 }
  export default config