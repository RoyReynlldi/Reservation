import { useState, useEffect } from 'react';
import { supabase, type MenuItem } from '../lib/supabase';

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_available', true)
        .order('category', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getMenuByCategory = (category: MenuItem['category']) => {
    return menuItems.filter(item => item.category === category);
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return {
    menuItems,
    loading,
    error,
    getMenuByCategory,
    refetch: fetchMenuItems
  };
};