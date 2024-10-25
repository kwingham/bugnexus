CREATE TABLE clerk_users
(
  id bigint primary key generated always as identity,
  clerk_id text,
  username text,
  bio text
);

-- Posts table
CREATE TABLE posts (
    id bigint primary key generated always as identity,
    title text NOT NULL,
    body TEXT,
    clerk_id INT REFERENCES clerk_users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Comments table
CREATE TABLE comments (
    id bigint primary key generated always as identity,
    body TEXT NOT NULL,
    clerk_id INT REFERENCES clerk_users(id),
    post_id INT REFERENCES posts(id),
    parent_comment_id INT NULL REFERENCES comments(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Votes table
CREATE TABLE votes (
    id bigint primary key generated always as identity,
    clerk_id INT REFERENCES clerk_users(id),
    post_id INT NULL REFERENCES posts(id),
    vote SMALLINT CHECK (vote IN (-1, 1)),
    vote_type VARCHAR(255) CHECK (vote_type IN ('post', 'comment')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    -- UNIQUE(user_id, post_id, vote_type)
);