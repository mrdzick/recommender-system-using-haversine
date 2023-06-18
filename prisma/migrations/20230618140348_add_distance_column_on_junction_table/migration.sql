/*
  Warnings:

  - Added the required column `distance` to the `nearest_points` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nearest_points" ADD COLUMN     "distance" DOUBLE PRECISION NOT NULL;
