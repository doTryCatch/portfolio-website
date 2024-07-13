-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "heading" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Techstack" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "projectid" INTEGER NOT NULL,

    CONSTRAINT "Techstack_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Techstack" ADD CONSTRAINT "Techstack_projectid_fkey" FOREIGN KEY ("projectid") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
