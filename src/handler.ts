import { Request, Response } from 'express'
import { DataRepository } from './repository'
import { Haversine } from './haversine'

export async function getRecommenderSellerHandler (req: Request, res: Response) {
  try {
    const { latbuyer, longbuyer } = req.query

    const sellers = await DataRepository.getAllSellers()

    const haversine = new Haversine(6371)

    const sellersWithDistance = sellers.map((seller) => {
      return {
        sellerId: seller.id,
        companyName: seller.companyName,
        city: `${seller.city}, ${seller.province}`,
        latitude: seller.latitude,
        longitude: seller.longitude,
        distance: haversine.calculateDistance({
          latitude: Number(latbuyer),
          longitude: Number(longbuyer)
        }, {
          latitude: seller.latitude,
          longitude: seller.longitude
        })
      }
    })

    const sortedSellers = sellersWithDistance.sort((sellerA, sellerB) => {
      return sellerA.distance - sellerB.distance
    })

    const slicedSortedSellers = sortedSellers.slice(0, 10)

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mendapatkan data rekomendasi seller!',
      data: slicedSortedSellers
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function getAllSellersHandler (req: Request, res: Response) {
  try {
    const sellers = await DataRepository.getAllSellers()

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mendapatkan data waste bank!',
      data: sellers
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function getAllBuyersHandler (req: Request, res: Response) {
  try {
    const buyers = await DataRepository.getAllBuyers()

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mendapatkan data buyer!',
      data: buyers
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function getAllWastesHandler (req: Request, res: Response) {
  try {
    const wastes = await DataRepository.getAllWastes()

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mendapatkan data limbah!',
      data: wastes
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function postWasteHandler (req: Request, res: Response) {
  try {
    await DataRepository.createWaste(req.body)

    res.status(201).json({
      status: 'success',
      message: 'Berhasil membuat data limbah!'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function deleteWasteHandler (req: Request, res: Response) {
  try {
    await DataRepository.deleteWasteById(Number(req.params.wasteId))

    res.status(201).json({
      status: 'success',
      message: 'Berhasil menghapus data limbah!'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function getDetailSellerHandler (req: Request, res: Response) {
  try {
    const seller = await DataRepository.getDetailSellerById(req.params.sellerId)

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mendapatkan data detail seller!',
      data: seller
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function postWasteInventoryHandler (req: Request, res: Response) {
  try {
    const { sellerId, wasteId } = req.body

    const wasteInventory = await DataRepository.checkWasteInventorySeller(sellerId, wasteId)

    if (wasteInventory) {
      res.status(409).json({
        status: 'fail',
        message: 'Data inventory limbah sudah pernah dibuat!'
      })

      return
    }

    await DataRepository.createWasteInventory(sellerId, wasteId)

    res.status(201).json({
      status: 'success',
      message: 'Berhasil membuat data inventory limbah!'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}

export async function deleteWasteInventorySellerHandler (req: Request, res: Response) {
  try {
    const { sellerId, wasteId } = req.params
    await DataRepository.deleteWasteInventory(sellerId, Number(wasteId))

    res.status(201).json({
      status: 'success',
      message: 'Berhasil menghapus data inventory limbah!'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Terjadi kegagalan pada server kami!'
    })
  }
}