# Validador de CPF

- Escolhi usar o metodo de validação descrito neste link:
    http://clubes.obmep.org.br/blog/a-matematica-nos-documentos-a-matematica-dos-cpfs/

## FIz em C# o qual tenho maior diminio e implementei uma classe estatica pois, não precisaria ser instanciada para realizar seu uso.
## Refiz a mesma classe em JavaScript e a usei validando o campo CPF dinamicamente na interface


## Um CPF é uma sequÊncia de 9 dígitos, seguido por dois digitos verificadores.
### Algoritimo de Validação

#### Primeiro digito
-  Os nove primeiros algarismos são ordenadamente multiplicados pela sequência 10, 9, 8, 7, 6, 5, 4, 3, 2
    EX: 123.456.789-XX sendo X uma incognita
        1x10 = 10 | 2x9 = 18 | 3x8 = 24 | 4x7 = 28 | 5x6 = 30 | 6x5 = 30 | 7x4 = 28 | 8x3 = 24 | 9x2 = 18

- Somamos então o resultado das multiplicações dos digitos.
    10 + 18 + 24 + 28 + 30 + 30 + 28 + 24 + 18 = 210

- Dividimos o resultado por 11, armazenando o resto da divisão.
- Se o resto da divisão for 0 ou 1, o primeiro digito será 0, caso contrario sera o resultado de 11 menos o resto.
    210 % 11 = 1 sendo assim o primeiro digito é 0

#### Segundo digito
-  Os nove algarismos são ordenadamente multiplicados pela sequência 10, 9, 8, 7, 6, 5, 4, 3, 2. Porém desta vez removemos o primeiro algarismo e adicionamos o primeiro digito verificador.
    EX: 123.456.789.0X
        2x10 = 20 | 3x9 = 27 | 4x8 = 32 | 5x7 = 35 | 6x6 = 36 | 7x5 = 35 | 8x4 = 32 | 9x3 = 27 | 0x2 = 0
- - Somamos então o resultado das multiplicações dos digitos.
    20 + 27 + 32 + 35 + 36 + 35 + 32 + 27 + 0 = 244

- Se o resto da divisão for 0 ou 1, o primeiro digito será 0, caso contrario sera o resultado de 11 menos o resto.
    244 % 11 = 2 sendo assim o segundo digito é 11 - 2 = 9
    
Sendo assim o CPF válido seria 123.456.789-09



### Observação: 
Em um primeiro momento, os Dígitos Verificadores de um CPF servem para alertar que o número foi escrito de forma inadequada, sem que haja necessidade de se acessar o banco de dados da Receita Federal. Mas a validação de um CPF realizada com base apenas nos Dígitos Verificadores não significa que esse CPF exista no Cadastro Nacional de Pessoas Físicas e nem que ele seja um número ativo ou com situação cadastral regular perante a Receita Federal.
Assim, um número de CPF autenticado apenas pelos seus Dígitos Verificadores não é, necessariamente, um documento já emitido ou legalmente válido. Para conferir se um número de CPF está ativo ou com situação cadastral regular, deve ser consultado o site oficial da Secretaria da Receita Federal do Brasil.