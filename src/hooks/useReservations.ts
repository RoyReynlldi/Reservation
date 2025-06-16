import { useState, useEffect } from 'react';
import { supabase, type Reservation } from '../lib/supabase';

export const useReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('reservation_date', { ascending: true });

      if (error) throw error;
      setReservations(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createReservation = async (reservationData: Omit<Reservation, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .insert([reservationData])
        .select()
        .single();

      if (error) throw error;
      
      // Refresh reservations list
      await fetchReservations();
      return data;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to create reservation');
    }
  };

  const updateReservationStatus = async (id: string, status: Reservation['status']) => {
    try {
      const { error } = await supabase
        .from('reservations')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      // Refresh reservations list
      await fetchReservations();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update reservation');
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return {
    reservations,
    loading,
    error,
    createReservation,
    updateReservationStatus,
    refetch: fetchReservations
  };
};