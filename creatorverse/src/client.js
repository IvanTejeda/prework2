import { createClient } from '@supabase/supabase-js';

const URL = 'https://rzprayhnqokkwxpzhvgd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cHJheWhucW9ra3d4cHpodmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNDE1NTgsImV4cCI6MjAzOTYxNzU1OH0.EPorQPX4P1S4pPrEXtQaqP71mA0Lr2sgLZKgKs8HXUQ';
const supabase = createClient(URL, API_KEY);
export default supabase