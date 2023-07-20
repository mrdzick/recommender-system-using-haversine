import express from 'express'
import {
  getRecommenderSellerHandler,
  getAllSellersHandler,
  getAllBuyersHandler,
  getAllWastesHandler,
  postWasteHandler,
  deleteWasteHandler
} from './handler'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*'
}))

// Use express.json() middleware, if not we will get undefined value on req.body
app.use(express.json())

app.get('/recommender-seller', getRecommenderSellerHandler)
app.get('/sellers', getAllSellersHandler)
app.get('/buyers', getAllBuyersHandler)
app.get('/wastes', getAllWastesHandler)
app.post('/wastes', postWasteHandler)
app.delete('/wastes/:wasteId', deleteWasteHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port: ${PORT}`)
})