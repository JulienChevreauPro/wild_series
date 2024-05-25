drop table if exists user, item, program, category;

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(100) not null
);

create table program (
  id int unsigned primary key auto_increment not null,
  title varchar(100) not null,
  synopsis text not null,
  poster varchar(100),
  country varchar(100),
  year int not null,
  category_id int unsigned not null,
  foreign key(category_id) references category(id)
);
