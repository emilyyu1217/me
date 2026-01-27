-- Add question and answer columns to messages table
ALTER TABLE messages ADD COLUMN IF NOT EXISTS question TEXT;
ALTER TABLE messages ADD COLUMN IF NOT EXISTS answer TEXT;
