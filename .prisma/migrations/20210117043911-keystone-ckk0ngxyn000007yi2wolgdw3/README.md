# Migration `20210117043911-keystone-ckk0ngxyn000007yi2wolgdw3`

This migration has been generated by Taziva at 1/17/2021, 4:39:11 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "KS__ContentType_Post_content" DROP CONSTRAINT "KS__ContentType_Post_content_from_fkey"

ALTER TABLE "Post" ADD COLUMN     "content" TEXT

DROP TABLE "KS__ContentType_Post_content"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210117035717-keystone-ckk0lz27j0000j5yia4slhp0y..20210117043911-keystone-ckk0ngxyn000007yi2wolgdw3
--- datamodel.dml
+++ datamodel.dml
@@ -1,6 +1,6 @@
 datasource postgresql {
-  url = "***"
+  url = "***"
   provider = "postgresql"
 }
 generator client {
@@ -17,33 +17,26 @@
   Post     Post[]   @relation("Postauthor")
 }
 model Post {
-  id                 Int                           @id @default(autoincrement())
+  id                 Int            @id @default(autoincrement())
   title              String?
   state              String?
   image              Json?
+  content            String?
   summary            String?
   publishedAt_utc    DateTime?
   publishedAt_offset String?
-  slug               String?                       @unique
+  slug               String?        @unique
   updatedAt_utc      DateTime?
   updatedAt_offset   String?
   createdAt_utc      DateTime?
   createdAt_offset   String?
-  content            KS__ContentType_Post_content? @relation("KS__ContentType_Post_contentfrom")
-  author             User?                         @relation("Postauthor", fields: [authorId], references: [id])
-  authorId           Int?                          @map("author")
-  categories         PostCategory[]                @relation("Post_categories_many", references: [id])
+  author             User?          @relation("Postauthor", fields: [authorId], references: [id])
+  authorId           Int?           @map("author")
+  categories         PostCategory[] @relation("Post_categories_many", references: [id])
 }
-model KS__ContentType_Post_content {
-  id       Int     @id @default(autoincrement())
-  document String?
-  from     Post?   @relation("KS__ContentType_Post_contentfrom", fields: [fromId], references: [id])
-  fromId   Int?    @map("from")
-}
-
 model PostCategory {
   id              Int     @id @default(autoincrement())
   name            String?
   slug            String? @unique
```

