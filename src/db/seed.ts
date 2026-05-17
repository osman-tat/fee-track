import * as SQLite from 'expo-sqlite';

export const seedDatabase = (db: SQLite.SQLiteDatabase) => {
  // Kategorileri kontrol et ve yoksa ekle
  const categoryCount = db.getFirstSync<{ count: number }>('SELECT COUNT(*) as count FROM categories');
  
  if (categoryCount && categoryCount.count === 0) {
    db.execSync(`
      INSERT INTO categories (id, name, color, icon) VALUES 
      (1, 'Dijital Uygulamalar', '#2196F3', 'smartphone'),
      (2, 'Eğlence', '#FF9800', 'play-circle'),
      (3, 'Fatura', '#FFC107', 'file-text'),
      (4, 'Ulaşım', '#4CAF50', 'car'),
      (5, 'Diğer', '#9E9E9E', 'more-horizontal');
    `);
    console.log('✅ Kategoriler başarıyla eklendi.');
  }

  // Platformları kontrol et ve yoksa ekle
  const platformCount = db.getFirstSync<{ count: number }>('SELECT COUNT(*) as count FROM platforms');
  
  if (platformCount && platformCount.count === 0) {
    db.execSync(`
      INSERT INTO platforms (id, name, default_category_id) VALUES 
      (1, 'Netflix', 2),
      (2, 'Spotify', 2),
      (3, 'YouTube Premium', 2),
      (4, 'Apple Music', 2),
      (5, 'Amazon Prime', 2),
      (6, 'Disney+', 2),
      (7, 'Exxen', 2),
      (8, 'Microsoft 365', 1),
      (9, 'Adobe CC', 1),
      (10, 'Dropbox', 1),
      (11, 'iCloud', 1),
      (12, 'Turkcell Faturası', 3),
      (13, 'Vodafone Faturası', 3),
      (14, 'Elektrik', 3),
      (15, 'Doğalgaz', 3);
    `);
    console.log('✅ Platformlar başarıyla eklendi.');
  }
};
