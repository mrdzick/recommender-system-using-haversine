import express from 'express'
import { getRecommenderSellerHandler } from './handler'

const app = express()

app.get('/recommender-seller', getRecommenderSellerHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port: ${PORT}`)
})