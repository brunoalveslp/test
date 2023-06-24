# Interface

## Interface criada em HTML, CSS e JS

2) Agora vamos criar uma interface (HTML) com os mesmos campos existentes na tabela do banco dados. ( Nome
do motorista, CPF, número da placa do veículo, data do abastecimento, quantidade de km rodados, valor do
litro do combustível e valor total da nota). OBS: Não é necessário realizar conexão com o banco de dados.
Nesta tela em HTML, crie um botão “Gravar” que ao clicar chama uma função JavaScript que valida se todos
os campos estão preenchidos. Também crie uma função para ao digitar a quantidade de km rodados e o valor
do litro do combustível, preenchaautomaticamente o valortotal.

- nome
- cpf
-numero_placa
- data_nf
- distancia_km
- valor_litro
- valor_total

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

## Documentação utilizada para tirar duvidas pontuais

https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dialog
https://cdnjs.com/libraries/font-awesome
https://fonts.google.com/specimen/Roboto?query=roboto
