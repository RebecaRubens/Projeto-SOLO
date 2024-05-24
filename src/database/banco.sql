CREATE DATABASE UmaOdisseia;

USE UmaOdisseia;


CREATE TABLE cadastro (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    CPF CHAR(11),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE Forum (
	id INT PRIMARY KEY AUTO_INCREMENT,
	avaliacao INT CHECK (avaliacao >= 1 AND avaliacao <= 5),
	comentario VARCHAR(350),
	fk_cadastro INT,
	FOREIGN KEY (fk_cadastro) REFERENCES cadastro(id)
);

insert into cadastro (nome, CPF, email, senha) values ('rebeca', '55646495830', 'beca@gmail', '12345');