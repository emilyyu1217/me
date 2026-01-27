-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert messages
CREATE POLICY "Anyone can insert messages" ON messages
  FOR INSERT
  WITH CHECK (true);

-- Policy to allow reading messages (for admin via service key)
CREATE POLICY "Service role can read messages" ON messages
  FOR SELECT
  USING (true);
