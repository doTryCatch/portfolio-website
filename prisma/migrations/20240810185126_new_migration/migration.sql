/*
  Warnings:

  - You are about to drop the column `name` on the `Techstack` table. All the data in the column will be lost.
  - Added the required column `githubLinkUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usededTech` to the `Techstack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "githubLinkUrl" TEXT NOT NULL,
ADD COLUMN     "thumbnail" BYTEA NOT NULL;

-- AlterTable
ALTER TABLE "Techstack" DROP COLUMN "name",
ADD COLUMN     "usededTech" TEXT NOT NULL;
