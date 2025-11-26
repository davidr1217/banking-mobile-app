import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL ='https://qemmnpzdczszsymkbcdg.supabase.co';
const SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbW1ucHpkY3pzenN5bWtiY2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzg5ODIsImV4cCI6MjA3OTc1NDk4Mn0.IPSYBXpCvH8tZd-NM3aK2Vq1MhvzUBwJvrVDNTkuigc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
