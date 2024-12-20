const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Inisialisasi Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
// console.log('ini dari backend', process.env.SUPABASE_URL);

const uploadImageToSupabase = async (filePath, filename) => {
  try {
    const { data, error } = await supabase.storage.from('product-images').upload(`public/${filename}`, fs.createReadStream(filePath), {
      cacheControl: '3600',
      upsert: false,
    });

    if (error) throw error;

    const { publicUrl } = supabase.storage.from('product-images').getPublicUrl(`public/${filename}`);
    if (!publicUrl) throw new Error('Failed to get public URL');

    return publicUrl;
  } catch (error) {
    console.error('Supabase Upload Error:', error.message);
    throw new Error(error.message);
  }
};

module.exports = { uploadImageToSupabase };
