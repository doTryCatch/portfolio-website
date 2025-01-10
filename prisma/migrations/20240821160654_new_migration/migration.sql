/*
  Warnings:

  - You are about to drop the column `usededTech` on the `Techstack` table. All the data in the column will be lost.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Techstack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Techstack" DROP COLUMN "usededTech",
ADD COLUMN     "name" TEXT NOT NULL;
