import * as SQLite from 'expo-sqlite';
import { seedDatabase } from './seed';

// Uygulama genelinde kullanılacak veritabanı bağlantısı
export const getDb = () => {
  return SQLite.openDatabaseSync('feetrack.db');
};

// Veritabanı tablolarını ve ilk kurulumları başlatan fonksiyon
export const initDb = () => {
  const db = getDb();
  
  // Tabloları senkron (senkronize) olarak kuruyoruz (Expo SDK 50+ özelliği)
  db.execSync(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      color TEXT NOT NULL,
      icon TEXT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS platforms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      logo_asset TEXT,
      default_category_id INTEGER REFERENCES categories(id)
    );
    
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL CHECK(length(name) <= 50),
      amount REAL NOT NULL CHECK(amount > 0),
      currency TEXT NOT NULL CHECK(currency IN ('TRY','EUR','USD','DZD')),
      category_id INTEGER NOT NULL REFERENCES categories(id),
      platform_id INTEGER REFERENCES platforms(id),
      period TEXT NOT NULL CHECK(period IN ('monthly','yearly')),
      payment_day INTEGER NOT NULL CHECK(payment_day BETWEEN 1 AND 31),
      is_active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );
    
    -- Performans için indeksler
    CREATE INDEX IF NOT EXISTS idx_expenses_payment_day ON expenses(payment_day);
    CREATE INDEX IF NOT EXISTS idx_expenses_category_id ON expenses(category_id);
    CREATE INDEX IF NOT EXISTS idx_expenses_is_active ON expenses(is_active);
  `);

  // Tablolar oluştuktan sonra başlangıç verilerini (seed) basalım
  seedDatabase(db);
  console.log('✅ Veritabanı tabloları ve indeksleri hazır.');
};
