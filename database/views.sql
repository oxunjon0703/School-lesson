
CREATE INDEX user_login_index ON users USING HASH (login);

CREATE UNIQUE INDEX idx_user_fr_ls
ON users(first_name, last_name);


CREATE view vw_student as
    SELECT s.*, jsonb_agg(row_to_json(p.*)) AS student FROM users s LEFT JOIN users p on p.parent_id = p.id where p.role = 'student' group by p.id


CREATE view vw_parent as
    SELECT p.*, jsonb_agg(row_to_json(s.*)) AS parent FROM users s LEFT JOIN users p on p.parent_id = p.id where p.role = 'parent' group by p.id