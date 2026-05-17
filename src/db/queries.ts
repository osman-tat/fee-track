import { getDb } from './database';

export interface Category {
  id: number;
  name: string;
  color: string;
  icon: string;
}

export interface Platform {
  id: number;
  name: string;
  logo_asset: string | null;
  default_category_id: number;
}

export interface Expense {
  id: number;
  name: string;
  amount: number;
  currency: 'TRY' | 'EUR' | 'USD' | 'DZD';
  category_id: number;
  platform_id: number | null;
  period: 'monthly' | 'yearly';
  payment_day: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export const dbQueries = {
  // --- KATEGORİLER ---
  getAllCategories: (): Category[] => {
    return getDb().getAllSync<Category>('SELECT * FROM categories ORDER BY name ASC');
  },

  // --- PLATFORMLAR ---
  getAllPlatforms: (): Platform[] => {
    return getDb().getAllSync<Platform>('SELECT * FROM platforms ORDER BY name ASC');
  },

  searchPlatforms: (query: string): Platform[] => {
    return getDb().getAllSync<Platform>('SELECT * FROM platforms WHERE name LIKE ? ORDER BY name ASC', [\`%\${query}%\`]);
  },

  // --- GİDERLER ---
  getAllExpenses: (): Expense[] => {
    return getDb().getAllSync<Expense>('SELECT * FROM expenses WHERE is_active = 1 ORDER BY payment_day ASC');
  },

  addExpense: (
    expense: Omit<Expense, 'id' | 'is_active' | 'created_at' | 'updated_at'>
  ): number => {
    const result = getDb().runSync(
      \`INSERT INTO expenses (name, amount, currency, category_id, platform_id, period, payment_day) 
       VALUES (?, ?, ?, ?, ?, ?, ?)\`,
      [
        expense.name,
        expense.amount,
        expense.currency,
        expense.category_id,
        expense.platform_id,
        expense.period,
        expense.payment_day,
      ]
    );
    return result.lastInsertRowId;
  },

  updateExpense: (id: number, expense: Partial<Expense>): void => {
    // Sadece değişen alanları güncellemek için dinamik query oluşturulabilir
    // MVP için basitleştirilmiş update:
    getDb().runSync(
      \`UPDATE expenses 
       SET name = ?, amount = ?, currency = ?, category_id = ?, platform_id = ?, period = ?, payment_day = ?, updated_at = datetime('now')
       WHERE id = ?\`,
      [
        expense.name,
        expense.amount,
        expense.currency,
        expense.category_id,
        expense.platform_id,
        expense.period,
        expense.payment_day,
        id,
      ]
    );
  },

  deleteExpense: (id: number): void => {
    // Veriyi tamamen silebiliriz veya is_active = 0 yapabiliriz (Soft delete)
    // MVP'de tamamen siliyoruz
    getDb().runSync('DELETE FROM expenses WHERE id = ?', [id]);
  },
};
