import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface DistancePoint {
  buyerId: string
  sellerId: string
  distance: number
}

interface Waste {
  name: string
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

  static async getAllWastes () {
    const wastes = await prisma.waste.findMany()

    return wastes
  }

  static async createWaste (waste: Waste) {
    await prisma.waste.create({
      data: waste
    })
  }

  static async deleteWasteById (wasteId: number) {
    await prisma.waste.delete({
      where: {
        id: wasteId
      }
    })
  }
}