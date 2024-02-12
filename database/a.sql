CREATE DATABASE crm_systm;

CREATE TYPE role_type AS ENUM
('parent', 'student', 'admin', 'interested');

CREATE TABLE students(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int [] DEFAULT NULL,
    role  role_type DEFAULT 'student',
    parent_id INT DEFAULT NULL,
    about VARCHAR(460),
    created_at DATE DEFAULT now(),
    constraint fk_parent_id foreign key(parent_id) references users(id) 
);
CREATE TABLE register(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    number int DEFAULT NULL,

)

CREATE TABLE interested(
    id SERIAL PRIMARY KEY,
    name VARCHAT(80) NOT NULL,
    number NUMERIC NOT NULL
)

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    phone VARCHAR(20),
    position VARCHAR(50)
);


CREATE TABLE Courses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    start_date DATE,
    end_date DATE,
    instructor INT NOT NULL,
    constraint fk_instructor_id foreign key(instructor) references employees(id) 
);

CREATE TABLE training_rooms (
    id BIGSERIAL PRIMARY KEY,

)