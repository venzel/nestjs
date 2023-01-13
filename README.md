# NestJs

**REFERÊNCIAS:**

[Wesley Williams - Fullcycle](https://github.com/codeedu/nest-kafka/tree/master/apache-kafka)<br />
[Iago Maia - Medium](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)<br />
[Imersão Fullcycle](https://github.com/codeedu/live-imersao-fullcycle8-nestjs-clean-architecture)

## Pré requisitos

- NodeJs ^14.15.0 || >= 16.10.0

## Instalar o CLI do NestJs

```bash
npm install -g @nestjs/cli
```

## Inicializar um projeto com NestJs

```bash
nest new nome-do-projeto
```

## Criar um módulo completo

```bash
# --no-spec impede de criar os arquivos de test
nest g res payments --no-spec
```

## Módulos para transpile

- @swc/jest -D
- @swc/core -D

## Para acelelar o transpile, necessário criar o arquivo .swcrc com o conteúdo:

```json
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": true
    },
    "target": "es2017",
    "keepClassNames": true,
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true
    }
  },
  "module": {
    "type": "commonjs"
  }
}
```

## Para fazer uma validação profunda das tipagens

no arquivo tsconfig.json, adicionar a linha:

```json
{
  "strict": true
}
```

## Para instalar os pacotes e rodar o projeto

```bash
# Instalar os pacotes
yarn install

# Rodar o projeto
yarn start:dev
```

## Ciclo de vida request

![Ciclo de vida request](./images/ciclo-vida-request.png)

## Parse Pipe Int na controller

![Parse Pipe Int na controller](./images/pipe-int.png)

## Alguns pipes existentes

![Parse Pipe Int na controller](./images/pipes.png)

## Comparativos de ORM

![Parse Pipe Int na controller](./images/comparativo-orm.png)

\* Imagens por João Rangel
