import express from 'express'
import {
  getRecommenderSellerHandler,
  getAllSellersHandler,
  getDetailSellerHandler,
  getAllBuyersHandler,
  getAllWastesHandler,
  postWasteHandler,
  deleteWasteHandler,
  postWasteInventoryHandler,
  deleteWasteInventorySellerHandler
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
app.get('/sellers/:sellerId', getDetailSellerHandler)
app.get('/buyers', getAllBuyersHandler)
app.get('/wastes', getAllWastesHandler)
app.post('/wastes', postWasteHandler)
app.delete('/wastes/:wasteId', deleteWasteHandler)
app.post('/sellers/:sellerId/waste-inventories', postWasteInventoryHandler)
app.delete('/sellers/:sellerId/waste-inventories/:wasteId', deleteWasteInventorySellerHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port: ${PORT}`)
})