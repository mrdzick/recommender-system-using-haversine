-- CreateTable
CREATE TABLE "wastes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "wastes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waste_inventories" (
    "id" SERIAL NOT NULL,
    "seller_id" TEXT NOT NULL,
    "waste_id" INTEGER NOT NULL,

    CONSTRAINT "waste_inventories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "waste_inventories" ADD CONSTRAINT "waste_inventories_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waste_inventories" ADD CONSTRAINT "waste_inventories_waste_id_fkey" FOREIGN KEY ("waste_id") REFERENCES "wastes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
