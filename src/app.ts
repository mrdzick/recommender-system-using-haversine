import express from 'express'
import { getRecommenderSellerHandler, getAllSellersHandler } from './handler'

const app = express()

app.get('/recommender-seller', getRecommenderSellerHandler)
app.get('/sellers', getAllSellersHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port: ${PORT}`)
})