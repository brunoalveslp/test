CREATE DATABASE test;

USE test;

-- Possibilidade 2

CREATE TABLE motoristas (
    motorista_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
  	numero_placa VARCHAR(7) NOT NULL,
	PRIMARY KEY (motorista_id)
);

CREATE TABLE notas (
  nota_id INT NOT NULL AUTO_INCREMENT,
  motorista_id INT NOT NULL,
  data_nf DATE NOT NULL,
  distancia_km DECIMAL(10, 3) NOT NULL,
  valor_litro DECIMAL(5, 3) NOT NULL,
  valor_total DECIMAL(13, 4) NOT NULL,
  PRIMARY KEY (nota_id),
  CONSTRAINT fk_motorista FOREIGN KEY (motorista_id) REFERENCES motoristas(motorista_id)
);


INSERT INTO motoristas (nome, cpf, numero_placa)
VALUES
  ('Bruno Alves', '12345678901', 'ABC1234'),
  ('Tiago Silva', '12345678902', 'XYZ5678'),
  ('Antonio Oliveira', '12345678903', 'DEF5678'),
  ('Mauricio de Souza', '12345678904', 'GHI9012'),
  ('Gabriel Pereira', '12345678905', 'JKL3456');



INSERT INTO notas (motorista_id, data_nf, distancia_km, valor_litro, valor_total)
VALUES
  (1, '2023-06-01', 100.5, 4.75, 477.375),
  (2, '2023-06-02', 75.2, 4.95, 372.84),
  (3, '2023-06-03', 50.7, 3.25, 164.775),
  (4, '2023-06-04', 120.9, 4.5, 544.05),
  (5, '2023-06-05', 80.2, 5.25, 421.05),
  (1, '2023-06-06', 60.3, 3.95, 238.485),
  (2, '2023-06-07', 95.1, 4.25, 404.175),
  (3, '2023-06-08', 70.8, 3.75, 265.5),
  (4, '2023-06-09', 110.2, 4.35, 479.67),
  (5, '2023-06-10', 65.5, 4.75, 310.625);

  
SELECT * FROM notas ORDER BY valor_total DESC;










