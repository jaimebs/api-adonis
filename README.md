# Adonis API

Este é um projeto de estudo do framework Adonisjs. https://adonisjs.com/

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Instalação

Primeiramento tem que ser instalado globalmente.

```
npm i --global @adonisjs/cli
```

Em seguida crie um novo projeto utilizando o CLI do adonis.

```
adonis new projeto --api-only
```

Para subir o servidor é só usar o comando.

```
adonis serve --dev
```

## Migrations

Para utilizar o migrations rode o comando abaixo.

```js
adonis migration:run
```

## Configurações

### Cors

Para deixar acesso público da API vá em **config/cors.js** e coloque origin: true

### Conexão com banco de dados

Va no arquivo .env na raiz do projeto e faça as configurações definidas. Dependendo do banco que será utilizado terá que baixar a dependencia. No exemplo desse projeto será o ***Postgres***, e para instalar a dependencia só digitar no terminal **npm i pg** e fazer a configuração no arquivo. Depois de feito a configuração rode o comando para gerar o ***migration*** para saber se deu certo.

## Criar Model, Controller e Migration

Digite no terminal o comando abaixo, e será criado automaticamente o model, controller e o migration.

```
adonis make:model Nomedomodel -m -c
```

## Configurar schema da base de dados

Depois de criado o arquivo schema na pasta migrations, coloque os campos que deseja e as configurações.

## Rotas

Para definiar as rotas do serviço rest basta ir em **start/router.js**.

```
Route.resource('cursos', 'CursoController').apiOnly()
```

## Ferramentas usadas

- Vscode (Editor de código)
- Insomnina (Requisições http)
