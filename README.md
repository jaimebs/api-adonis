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
