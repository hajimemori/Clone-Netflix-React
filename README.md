# Netflix Clone

Este projeto foi realizado com fins de estudar e aprimorar minhas habilidades no framework React. Utilizei o site da plataforma de streaming Netflix e o vídeo do Bonieky Lacerda como base para construção do projeto. 

## Desenvolvimento do Projeto 

O projeto foi iniciado com único arquivo chamado de Tmdb.js que seria responsável por qualquer tipo de consulta na API.
Na sequencia foi criado os componentes react que irão cuidar da parte visual efetivamente 

### Componentes  

## Header
Este é o componente responsável pelo cabeçalho. Neste temos o efeito do fundo transparente para cabeçalho, mas apenas quando a página esta com a barra de rolagem no topo, caso contrário o fundo se torna preto para não atrapalhar a experiência do usuário durante a navegação do site.  

## FeatureMovie
Este é o componente principal que é visualizado assim que a página é carregada. Nele é exibido um baner destacando um filme ou uma série aleatória original netflix. É exibido diversas informações da série ou filme (como gêneros, temporadas, pontos de popularidade, ano de lançamento e descrição). No componente limitamos o tamanho da descrição do destaque pois em caso de descrições excessivamente grandes, acabava interferindo em outras partes do layout.

## Movie Row
Este componente é responsavel por cada uma das listas de filmes exibida abaixo do destaque. Nela utilizamos uma tecnica de criar duas *div* e fazer uma "correr" por dentro da outra dando este efeito de carrossel que é utilizada no site da Netflix. Também foi criado as setas laterais e funções que iriam lidar com a movimentação da lista.

## API

A API utilizada no projeto foi do site do TheMoviedb. Que possui uma ótima documentação e fornece diversas informações sobre diversos filmes. Foi utilizada tal API por ser completa, simples e sem custos adicionais.

## Fontes

 * https://www.netflix.com/browse 
 * https://www.youtube.com/watch?v=tBweoUiMsDg
 * https://www.themoviedb.org/documentation/api