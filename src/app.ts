import express from 'express'
import { getRecommenderSellerHandler, getAllSellersHandler, getAllBuyersHandler } from './handler'

const app = express()

app.get('/recommender-seller', getRecommenderSellerHandler)
app.get('/sellers', getAllSellersHandler)
app.get('/buyers', getAllBuyersHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port: ${PORT}`)
})