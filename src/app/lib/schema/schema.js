import { pgTable, serial, varchar, timestamp, boolean, integer, decimal, text, json } from 'drizzle-orm/pg-core';

// Users table - for both shop owners and super admins
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  hashedPassword: varchar('hashed_password', { length: 255 }).notNull(),
  role: varchar('role', { length: 20 }).notNull().default('shop_owner'), // 'shop_owner' or 'super_admin'
  firstName: varchar('first_name', { length: 100 }),
  lastName: varchar('last_name', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Shops table
export const shops = pgTable('shops', {
  id: serial('id').primaryKey(),
  ownerId: integer('owner_id').references(() => users.id).notNull(),
  subdomain: varchar('subdomain', { length: 50 }).notNull().unique(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  logo: varchar('logo', { length: 255 }), // Cloudinary URL
  active: boolean('active').default(true).notNull(),
  settings: json('settings').default({}), // Store theme, contact info, etc.
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Products table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  shopId: integer('shop_id').references(() => shops.id).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  inventory: integer('inventory').default(0),
  images: json('images').default([]), // Array of Cloudinary URLs
  active: boolean('active').default(true).notNull(),
  metadata: json('metadata').default({}), // For additional product attributes
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Orders table
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  shopId: integer('shop_id').references(() => shops.id).notNull(),
  customerEmail: varchar('customer_email', { length: 255 }).notNull(),
  customerName: varchar('customer_name', { length: 200 }).notNull(),
  status: varchar('status', { length: 50 }).notNull().default('pending'), // pending, paid, completed, cancelled
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  shippingAddress: json('shipping_address').notNull(),
  paymentIntent: varchar('payment_intent', { length: 255 }), // Stripe payment intent ID
  metadata: json('metadata').default({}), // For additional order data
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Order Items table (for order line items)
export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').references(() => orders.id).notNull(),
  productId: integer('product_id').references(() => products.id).notNull(),
  quantity: integer('quantity').notNull(),
  priceAtTime: decimal('price_at_time', { precision: 10, scale: 2 }).notNull(), // Price when ordered
  productData: json('product_data').notNull(), // Snapshot of product data at time of order
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Analytics table (for shop performance metrics)
export const analytics = pgTable('analytics', {
  id: serial('id').primaryKey(),
  shopId: integer('shop_id').references(() => shops.id).notNull(),
  date: timestamp('date').notNull(),
  metrics: json('metrics').notNull(), // Store visits, conversion rate, revenue, etc.
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Subscriptions table (for shop payment plans)
export const subscriptions = pgTable('subscriptions', {
  id: serial('id').primaryKey(),
  shopId: integer('shop_id').references(() => shops.id).notNull(),
  planType: varchar('plan_type', { length: 50 }).notNull(), // free, premium, etc.
  status: varchar('status', { length: 50 }).notNull(), // active, cancelled, suspended
  stripeSubscriptionId: varchar('stripe_subscription_id', { length: 255 }),
  currentPeriodStart: timestamp('current_period_start'),
  currentPeriodEnd: timestamp('current_period_end'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});