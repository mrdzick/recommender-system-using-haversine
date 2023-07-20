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
  static async getAllSellers () {
    const sellers = await prisma.seller.findMany()

    return sellers
  }

  static async getDetailSellerById (sellerId: string) {
    const seller = await prisma.seller.findFirst({
      where: {
        id: sellerId
      },
      include: {
        wasteInventories: {
          include: {
            waste: true
          }
        }
      }
    })

    return {
      id: seller?.id,
      companyName: seller?.companyName,
      province: seller?.province,
      city: seller?.city,
      latitude: seller?.latitude,
      longitude: seller?.longitude,
      wasteInventories: seller?.wasteInventories.map((wasteInventory) => {
        return {
          id: wasteInventory.waste.id,
          name: wasteInventory.waste.name
        }
      })
    }
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

  static async createWasteInventory (sellerId: string, wasteId: number) {
    await prisma.wasteInventory.create({
      data: {
        sellerId,
        wasteId
      }
    })
  }

  static async deleteWasteInventory (sellerId: string, wasteId: number) {
    await prisma.wasteInventory.deleteMany({
      where: {
        sellerId,
        wasteId
      }
    })
  }

  static async checkWasteInventorySeller (sellerId: string, wasteId: number) {
    const wasteInventory = await prisma.wasteInventory.findFirst({
      where: {
        sellerId,
        wasteId
      }
    })

    return wasteInventory
  }
}