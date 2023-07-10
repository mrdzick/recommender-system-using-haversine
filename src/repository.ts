import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface DistancePoint {
  buyerId: string
  sellerId: string
  distance: number
}

export class DataRepository {
  static async getAllSellers() {
    const sellers = await prisma.seller.findMany()

    return sellers
  }

  static async getAllBuyers () {
    const buyers = await prisma.buyer.findMany()

    return buyers
  }
}