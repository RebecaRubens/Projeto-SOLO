CREATE DATABASE OdisseiaInbox;

USE OdisseiaInbox;

select * from usuario;
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table voto (
id INT AUTO_INCREMENT PRIMARY KEY,
personagem_votado VARCHAR(50) NOT NULL
);
insert into voto values
(1, 'blogueira'),
(2, 'narrador'),
(3, 'Lari apaixonada'),
(4, 'robo assassino'),
(5, 'morita'),
(6, 'vovozinha'),
(7, 'faxineira');
drop database OdisseiaInbox;


create table usuario_personagem (
usuario_idUsuario INT,
FOREIGN KEY (usuario_idUsuario) REFERENCES usuario(id),
voto_idVoto INT,
FOREIGN KEY (voto_idVoto) REFERENCES voto(id),
primary key pkComposta (usuario_idUsuario,voto_idVoto)
);

select * from usuario_personagem;
select * from voto;

SELECT
    COUNT(CASE WHEN voto_idVoto = 1 THEN 1 END) AS 'blogueira',
    COUNT(CASE WHEN voto_idVoto = 2 THEN 1 END) AS 'narrador',
    COUNT(CASE WHEN voto_idVoto = 3 THEN 1 END) AS 'Lari',
    COUNT(CASE WHEN voto_idVoto = 4 THEN 1 END) AS 'Robo Assasino',
    COUNT(CASE WHEN voto_idVoto = 5 THEN 1 END) AS 'morita',
    COUNT(CASE WHEN voto_idVoto = 6 THEN 1 END) AS 'vovozinha',
    COUNT(CASE WHEN voto_idVoto = 7 THEN 1 END) AS 'faxineira'
    FROM usuario_personagem;


insert into usuario (nome, email, senha) values ('rebeca', 'beca@gmail', '12345');