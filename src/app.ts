import express from 'express'
import { getRecommenderSellerHandler, getAllSellersHandler, getAllBuyersHandler } from './handler'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*'
}))

app.get('/recommender-seller', getRecommenderSellerHandler)
app.get('/sellers', getAllSellersHandler)
app.get('/buyers', getAllBuyersHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port: ${PORT}`)
})