create database covid;
use covid;
show tables;

create table rol
(
    id_rol int primary key auto_increment not null,
    rol    varchar(20)                    not null
);

create table user
(
    id_user  int primary key auto_increment not null,
    email    varchar(50)                    not null,
    password varchar(250)                   not null,
    id_rol   int
);
create table user_details
(
    id_user   int primary key not null,
    name      varchar(40)     not null,
    last_name varchar(50)     not null,
    phone     varchar(9),
    address   varchar(100)
);

alter table user
    add constraint fk_rol foreign key (id_rol) references rol (id_rol);
alter table user_details
    add constraint fk_user foreign key (id_user) references user (id_user);

