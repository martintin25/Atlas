import { supabase } from '../config/supabase';

export const personaService = {
  async obtenerPersonas() {
    const { data, error } = await supabase
      .from('personas')
      .select('id_Persona, Documento, fecha_Nacimiento, nombre')
      .order('id_Persona', { ascending: true });

    if (error) {
      console.error('Error al consultar personas:', error.message);
      throw new Error(error.message);
    }

    return data || [];
  }
};