import { supabase } from '../config/supabase';

export const personaService = {
  // 1. LEER
  async obtenerPersonas() {
    const { data, error } = await supabase
      .from('personas')
      .select('id_Persona, Documento, fecha_Nacimiento, nombre')
      .order('id_Persona', { ascending: true });

    if (error) throw new Error(error.message);
    return data || [];
  },

  // 2. CREAR
  async crearPersona(nuevaPersona) {
    const { data, error } = await supabase
      .from('personas')
      .insert([
        {
          nombre: nuevaPersona.nombre,
          Documento: nuevaPersona.Documento,
          fecha_Nacimiento: nuevaPersona.fecha_Nacimiento
        }
      ])
      .select();

    if (error) {
      console.error('Error al insertar en Supabase:', error);
      throw new Error(error.message);
    }
    return data;
  },

  // 3. ACTUALIZAR (EDITAR)
  async actualizarPersona(id, personaActualizada) {
    const { data, error } = await supabase
      .from('personas')
      .update({
        nombre: personaActualizada.nombre,
        Documento: personaActualizada.Documento,
        fecha_Nacimiento: personaActualizada.fecha_Nacimiento
      })
      .eq('id_Persona', id)
      .select();

    if (error) {
      console.error('Error al actualizar en Supabase:', error);
      throw new Error(error.message);
    }
    return data;
  },

  // 4. ELIMINAR
  async eliminarPersona(id) {
    const { error } = await supabase
      .from('personas')
      .delete()
      .eq('id_Persona', id);

    if (error) {
      console.error('Error al eliminar en Supabase:', error);
      throw new Error(error.message);
    }
    return true;
  }
};