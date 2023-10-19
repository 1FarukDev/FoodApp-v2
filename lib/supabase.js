import "react-native-url-polyfill/auto";
const SecureStore = require("expo-secure-store");
const { createClient } = require("@supabase/supabase-js");

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://kythrczfzwlauzdcuwav.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dGhyY3pmendsYXV6ZGN1d2F2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzM0NDY2OSwiZXhwIjoyMDA4OTIwNjY5fQ.Kcx5G3hQzZ3tMPy-m1SbX9UJ6t2Qe2UgowGOvFuzSHc";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

module.exports = { supabase };
