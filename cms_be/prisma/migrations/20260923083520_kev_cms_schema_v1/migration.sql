-- CreateEnum
CREATE TYPE "contentStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "LoginMethod" AS ENUM ('GOOGLE', 'MANUAL');

-- CreateTable
CREATE TABLE "demo" (
    "id" SERIAL NOT NULL,
    "user_name" CHAR(255) NOT NULL,
    "message" TEXT,

    CONSTRAINT "demo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "user_password_hashed" TEXT NOT NULL,
    "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updated_at" TIMESTAMP(3) NOT NULL,
    "reset_password_token_hash" TEXT,
    "reset_password_expires_at" TIMESTAMP(3),
    "user_login_method" "LoginMethod" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "ApiKeys" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "key_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_used_at" TIMESTAMP(3),
    "revoked_at" TIMESTAMP(3),

    CONSTRAINT "ApiKeys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pages" (
    "page_id" TEXT NOT NULL,
    "page_name" TEXT NOT NULL,
    "page_description" TEXT NOT NULL,
    "page_meta_title" TEXT NOT NULL,
    "page_meta_desc" TEXT NOT NULL,
    "page_slug" TEXT NOT NULL,
    "page_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "page_updated_at" TIMESTAMP(3) NOT NULL,
    "page_created_by" TEXT NOT NULL,
    "page_updated_by" TEXT NOT NULL,

    CONSTRAINT "Pages_pkey" PRIMARY KEY ("page_id")
);

-- CreateTable
CREATE TABLE "Contents" (
    "content_id" TEXT NOT NULL,
    "page_id" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "content_status" "contentStatus" NOT NULL,
    "content_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content_updated_at" TIMESTAMP(3) NOT NULL,
    "content_created_by" TEXT NOT NULL,
    "content_updated_by" TEXT NOT NULL,

    CONSTRAINT "Contents_pkey" PRIMARY KEY ("content_id")
);

-- CreateTable
CREATE TABLE "ContentLogs" (
    "content_log_id" TEXT NOT NULL,
    "page_id" TEXT NOT NULL,
    "content_before" JSONB NOT NULL,
    "content_after" JSONB NOT NULL,
    "log_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "log_created_by" TEXT NOT NULL,

    CONSTRAINT "ContentLogs_pkey" PRIMARY KEY ("content_log_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_email_key" ON "Users"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Contents_page_id_key" ON "Contents"("page_id");

-- AddForeignKey
ALTER TABLE "ApiKeys" ADD CONSTRAINT "ApiKeys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages" ADD CONSTRAINT "Pages_page_created_by_fkey" FOREIGN KEY ("page_created_by") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages" ADD CONSTRAINT "Pages_page_updated_by_fkey" FOREIGN KEY ("page_updated_by") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contents" ADD CONSTRAINT "Contents_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "Pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contents" ADD CONSTRAINT "Contents_content_created_by_fkey" FOREIGN KEY ("content_created_by") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contents" ADD CONSTRAINT "Contents_content_updated_by_fkey" FOREIGN KEY ("content_updated_by") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentLogs" ADD CONSTRAINT "ContentLogs_log_created_by_fkey" FOREIGN KEY ("log_created_by") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentLogs" ADD CONSTRAINT "ContentLogs_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "Pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;
