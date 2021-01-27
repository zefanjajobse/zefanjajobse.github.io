# show database list:
show databases;
show tables;

# show table info
describe tablename;

select * from todos;
(show everything from todos)

select * from todos where id = 1;

# create database
create database mytodo;

create table todos (id integer PRIMARY KEY AUTO_INCREMENT, description text NOT NULL, completed boolean NOT NULL);
create table name (name type modifiers, name type modifiers);

drop table todos;

# use the database:
use mytodo;

# add to table:
insert into todos (description, completed) values('Go to the store', false);