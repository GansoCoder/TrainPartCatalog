-- CreateTable
CREATE TABLE "TrainSeries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "trainSeriesId" INTEGER NOT NULL,
    CONSTRAINT "Category_trainSeriesId_fkey" FOREIGN KEY ("trainSeriesId") REFERENCES "TrainSeries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Part" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "location" TEXT,
    "imageUrl" TEXT,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Part_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
