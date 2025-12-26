import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    id: text("id").primaryKey()
});

export const games = pgTable("games", {
    id: serial("id").primaryKey(),
    ownerId: text("owner_id").notNull().references(() => users.id),
    status: text("status").notNull().default("active"),
    result: text("result"),
    initialFen: text("initial_fen").notNull().default("startpos"),
    createdAt: timestamp("created_at", { withTimezone: false }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: false }).notNull().defaultNow(),
})

export const moves = pgTable("moves", {
    id: serial("id").primaryKey(),
    gameId: integer("game_id").notNull().references(() => games.id),
    ply: integer("ply").notNull(),
    uci: text("uci").notNull(),
    createdAt: timestamp("created_at", { withTimezone: false }).notNull().defaultNow(),
});