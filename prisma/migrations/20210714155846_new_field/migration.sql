/*
  Warnings:

  - Added the required column `Saved` to the `Docs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Docs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "docName" TEXT NOT NULL,
    "Saved" TEXT NOT NULL,
    FOREIGN KEY ("UserId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Docs" ("UserId", "docName", "id") SELECT "UserId", "docName", "id" FROM "Docs";
DROP TABLE "Docs";
ALTER TABLE "new_Docs" RENAME TO "Docs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
