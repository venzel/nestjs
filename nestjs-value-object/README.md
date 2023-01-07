# NestJs + Kafka

**REFERÊNCIAS:**

[Wesley Williams - Fullcycle](https://github.com/codeedu/nest-kafka/tree/master/apache-kafka)<br />
[Iago Maia - Medium](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)
[Imersão Fullcycle](https://github.com/codeedu/live-imersao-fullcycle8-nestjs-clean-architecture)

## Pré requisitos

- NodeJs ^14.15.0 || >=16.10.0, versão corrente 18.12.1
- Npm, versão corrente 8.19.2
- CLI NestJs, versão corrente 9.1.5

## Instalar o CLI do NestJs

```bash
npm install -g @nestjs/cli
```

## Inicializar um projeto com NestJs

```bash
nest new nestjs-value-objet
```

## Criar um módulo completo

```bash
# --no-spec impede de criar os arquivos de test
nest g res payments --no-spec
```

## Técnicas utilizadas

- Adapter + barrel nos services
- ORM

## Pacotes utilizados

- @nestjs/config
- @nestjs/typeorm
- typeorm
- pg
- class-validator
- class-transformer
- @swc/jest -D (Módulo para acelerar o transpile)
- @swc/core -D (Módulo para acelerar o transpile)

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

## Para instalar os pacotes e rodar o projeto

```bash
# Instalar os pacotes
yarn install

# Rodar o projeto
yarn start:dev
```
