// import { boolean, json, } from "drizzle-orm/gel-core";
// import { integer, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

// // 1. Define the Enums
// export const roleEnum = pgEnum("role", ["Student", "Educator", "Admin"]);
// export const subscriptionTypeEnum = pgEnum("subscriptionType", ["Bronze", "Silver", "Gold", "Diamond"]);

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   username: varchar({ length: 100 }).unique(),
//   email: varchar({ length: 255 }).notNull().unique(),
//   phone: varchar({ length: 20 }), 
//   password: varchar({ length: 255 }), 
//   authProvider: varchar({ length: 50 }).notNull(), 
  
//   // 2. Add the Role field with Student as default
//   role: roleEnum("role").notNull().default("Student"),

//   // 3. Add the Subscription Type field with Bronze as default
//   subscriptionType: subscriptionTypeEnum("subscriptionType").notNull().default("Bronze"), 
//   subscriptionId: varchar({ length: 255 }),
// });

// export const courseTable = pgTable("courses", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   cid: varchar().unique(),
//   courseName: varchar(),
//   courseImage: varchar().notNull(),
//   noOfChapter: integer().notNull(),
//   courseCategory: varchar(),
//   includeVideo: boolean().default(false),
//   courseDifficulty: varchar().notNull(),
//   courseDescp: varchar().notNull(),
//   courseJson: json(),
//   userEmail: varchar("userEmail").references(() => usersTable.email),
//   status: varchar().default('pending'), // 'pending', 'approved', 'rejected'
//   reviewNotes: varchar(), // Feedback from admin for rejection
// });

// export const enrollCourseTable = pgTable("enrollCourse", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   cid: varchar()
//     .notNull()
//     .references(() => courseTable.cid),
//   userEmail: varchar("userEmail").references(() => usersTable.email),
//   completedChapters: json(),
// });

// export const educatorApplicationsTable = pgTable("educator_applications", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
  
//   // Basic Information
//   name: varchar().notNull(),
//   email: varchar().notNull().references(() => usersTable.email),
//   phone: varchar().notNull(),
//   highestEducation: varchar().notNull(),
//   message: text().notNull(),
  
//   // Status Tracking
//   status: varchar().default('pending'), // 'pending', 'approved', 'rejected'
//   reviewNotes: text(), // Feedback from Magadh Admin for rejection or guidance
  
//   // Timestamps (Good for tracking when they applied)
//   appliedAt: timestamp().defaultNow(),
//   updatedAt: timestamp().defaultNow()
// });

// export const contactInquiriesTable = pgTable("contact_inquiries", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   email: varchar({ length: 255 }).notNull(),
//   phone: varchar({ length: 20 }).notNull(),
//   subject: varchar({ length: 255 }).notNull(),
//   message: text().notNull(),
//   createdAt: timestamp().defaultNow(),
// });

// export const promoTable = pgTable("promo_box", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   badge: varchar("badge", { length: 100 }).notNull().default("Limited Offer"),
//   title: varchar("title", { length: 255 }).notNull(),
//   description: text("description").notNull(),
//   couponCode: varchar("coupon_code", { length: 50 }).notNull(),
//   redirectPath: varchar("redirect_path", { length: 255 }).notNull().default("/workspace"),
//   isVisible: boolean("is_visible").notNull().default(false),
//   updatedAt: timestamp("updated_at").defaultNow(),
// });

