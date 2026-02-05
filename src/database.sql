-- PageNow Database Schema

-- Courses Table: Hybrid model for Kerala SSLC and Global Skills
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT CHECK (category IN ('academic', 'skill', 'career')), -- 'academic' for SSLC/Plus Two
  region_tag TEXT DEFAULT 'global', -- 'kerala-state', 'cbse', 'global'
  price INTEGER DEFAULT 0,
  is_premium BOOLEAN DEFAULT false,
  metadata JSONB, -- Stores syllabus details like { "subject": "Physics", "grade": 12 } or { "tool": "Figma" }
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users Table (Extends Supabase Auth if needed, or standalone)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  grade_level TEXT, -- 'SSLC', 'Plus Two', 'Graduate'
  subscription_status TEXT DEFAULT 'free', -- 'free', 'premium'
  xp_points INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enrollments / Progress
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  course_id UUID REFERENCES courses(id),
  progress INTEGER DEFAULT 0, -- 0 to 100
  last_accessed TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Policies (Basic Examples)
CREATE POLICY "Public courses are viewable by everyone" ON courses FOR SELECT USING (true);
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = id);
