# MVP Full Stack - Front-End
## 1. Introdução

Este projeto é parte do MVP - _Minimum Viable Product_ - da _Sprint_ **Desenvolvimento _Full Stack_ Básico** do Curso de Engenharia de Software da PUC-Rio. O MVP é composto de um Back-End, com banco de dados, e de um Front-End. Neste repositório encontra-se a parte do Front-end da aplicação. A parte do back-end pode ser acessada em [MVP_FullStack_API](https://github.com/CarolinaRamalhoGit/MVP_FullStack_API).

>O projeto desenvolvido objetiva a facilitação de controle de datas de vencimento de produtos de um *Minimercado Autônomo*. Este tipo de empreendimento, que ganhou força durante a pandemia de Covid-19, é uma loja de conveniências, sem funcionários, disponibilizadas em sua maior parte dentro de condomínios residenciais.

Devido ao seu baixo custo de implantação, este nicho de mercado atraiu pequenos empreendedores e vem apresentando um grande crescimento tanto em número de unidades instaladas quanto em número de franqueadoras que oferecem um grande suporte para o funcionamento dos mesmos, incluindo a solução tecnológica que possibilita a gestão de inventário e os meios de pagamentos, via totens de autoatendimento.

Uma das dores, contudo, encontradas pelos pequenos, e muitas vezes inexperientes, empreendedores é o controle da validade dos produtos ofertados, funcionalidade não disponível em algumas das principais soluções deste nicho de negócio.

>Desta forma, este projeto visa, de forma bastante simplificada, implementar um banco de dados no qual seja possível consultar uma lista dos produtos com suas respectivas quantidades e datas de validade, para que, de posse desta informação, os produtos possam ser substituídos na loja e novas compras de seu estoque possam ser providenciadas. Além da consulta, é possível a inserção de novos itens e a exclusão de itens existentes. 

## 2. Front-End
O front-end é composto por uma seção de adição de novos produtos e outra de exibição da lista de produtos cadastrados.

A seção de adição é responsável por alimentar a tabela com as novas mercadorias que entram no estoque do mini-mercado, guardando suas respectivas quantidades e datas de vencimnento (validade). Nesta seção foi implementado um dropdown para o atributo nome do produto, para que sejam adicionados apenas itens cujos nomes façam parte de uma lista pré-cadastrada, evitando, assim, erros de digitação e nomes diferentes para um mesmo produto.

Na seção de itens pré-existentes, que são apresentados em formato de tabela, foi implementado um botão de exclusão para cada item. Esta exclusão tem por objetivo principal a retirada da lista de controle daqueles itens já retirados fisicamente da loja e do estoque por terem suas validades ultrapassadas ou próximas da data de vencimento. Importa destacar que, para evitar cliques acidentais, no front-end esta exclusão passa por uma etapa de confirmação via mensagem.

O front-end é composto pelos seguintes códigos:
- index.html
- scripts.js
- styles.css

## 3. Como executar

- Para acessar a página da aplicação, basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

- Para vê-la funcionando, faz-se necessário realizar o procesamento da API previamente. Para isso executar em seu terminal:

```
(env)$ flask run --host 0.0.0.0 --port 5000
```

## 4. Considerações
Por se tratar de um MVP, diversas funcionalidades do Front-End não foram priorizadas neste momento, ficando sua implementação para as versões futuras da aplicação. Dentre as já mapeadas, destacam-se as listadas a seguir:

- Ordenação da Tabela por nome ou por validade;
- Ferramenta de busca por nome do produto;
- Botão de edição de quantidade e/ou validade de um produto;
- Possibilidade de inserção de novos produtos na Lista de Produtos pré-cadastrados.