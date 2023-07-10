/*
  Warnings:

  - You are about to drop the `nearest_points` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "nearest_points" DROP CONSTRAINT "nearest_points_buyer_id_fkey";

-- DropForeignKey
ALTER TABLE "nearest_points" DROP CONSTRAINT "nearest_points_seller_id_fkey";

-- DropTable
DROP TABLE "nearest_points";
