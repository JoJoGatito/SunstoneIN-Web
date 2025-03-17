import { createClient } from '@supabase/supabase-js';

// Get environment variables with validation
const getEnvVariable = (name: string): string => {
  const value = import.meta.env[name] || process.env[name];
  
  if (!value) {
    console.error(`Missing environment variable: ${name}`);
    throw new Error(`Required environment variable ${name} is missing`);
  }
  
  return value;
};

// Get required environment variables or throw an error
const supabaseUrl = getEnvVariable('PUBLIC_SUPABASE_URL');
const supabaseKey = getEnvVariable('PUBLIC_SUPABASE_ANON_KEY');

// Log for debugging
console.log('Initializing Supabase client with URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseKey);