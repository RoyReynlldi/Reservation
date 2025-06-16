import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Reservation {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  reservation_date: string;
  reservation_time: string;
  party_size: number;
  special_requests?: string;
  status: 'confirmed' | 'cancelled' | 'completed' | 'no_show';
  created_at: string;
  updated_at: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface RestaurantSetting {
  id: string;
  setting_key: string;
  setting_value: string;
  updated_at: string;
}