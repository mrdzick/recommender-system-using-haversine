import { Request, Response } from 'express'
import { DataRepository } from './repository'
import { Haversine } from './haversine'

export async function getRecommenderSellerHandler (req: Request, res: Response) {
  try {
    const { id, latbuyer, longbuyer } = req.query

    const sellers = await DataRepository.getAllSellers()

    const haversine = new Haversine(6371)

    const distancePopulator = sellers.map((seller) => {
      return {
        buyerId: id as string,
        sellerId: seller.id,
        distance: haversine.calculateDistance({
          latitude: Number(latbuyer),
          longitude: Number(longbuyer)
        }, {
          latitude: seller.latitude,
          longitude: seller.longitude
        })
      }
    })

    await DataRepository.createDistancePoints(distancePopulator)

    res.status(200).json({
      status: 'success',
      message: 'Berhasil mendapatkan data rekomendasi seller!',
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