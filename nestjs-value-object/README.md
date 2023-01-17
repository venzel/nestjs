# NestJs Value Object

Arquitetura de uma api rest com NestJs, utilizando a modelagem de domínios ricos, através da técnica value object, tratamento de exceções com either e transformações de dados utilizando os conceitos de dtos e mappers.

**REFERÊNCIAS:**

[Wesley Williams - Fullcycle](https://github.com/codeedu/nest-kafka/tree/master/apache-kafka)<br />
[Iago Maia - Medium](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)<br />
[Imersão Fullcycle](https://github.com/codeedu/live-imersao-fullcycle8-nestjs-clean-architecture)<br />
[Migrations](https://orkhan.gitbook.io/typeorm/docs/migrations)

## Pré requisitos

-   NodeJs ^14.15.0 || >= 16.10.0, versão corrente 18.12.1
-   Npm, versão corrente 8.19.2
-   CLI NestJs, versão corrente 9.1.5

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

-   Padronização de commits (conventional commits);
-   Utilização de conceitos de módulos da arquitetura DDD;
-   Modelagem de entidades ricas com tratamento de exceções (Either) (DDD);
-   Desenvolvimento guiado a testes (TDD);
-   Chaveamento nas injeções de dependências;
-   Persistência dos dados em memória para facilitação dos testes unitários;
-   Tratamento de exceções personalizados;
-   Padrão de projeto adapter;
-   Padrão de projeto barrels;
-   Padrão de projeto DTO (DDD);
-   Utilização dos pipes validations para validação de dados nos DTOs;
-   Camada de repositórios com ORM TypeORM (DDD);
-   Versionamento do banco de dados, através das migrations;
-   Criação dos index nas colunas através das migrations;
-   Mappers para realizar as conversões de dados;
-   Variáveis de ambiente;
-   Interceptadores para criação dos logs da aplicação;
-   Decorators personalizados;
-   Testes unitários com o Jest, guiado pelo coverage reports;
-   Utilização de bibliotecas para transpilar o código mais rapidamente;

## Pacotes utilizados

-   @nestjs/config
-   dotenv -D
-   @nestjs/typeorm
-   typeorm
-   pg
-   class-validator
-   class-transformer
-   @swc/jest -D (Módulo para acelerar o transpile)
-   @swc/core -D (Módulo para acelerar o transpile)

## TypeOrm

### Para criar uma migration

```bash
# Será criado do caminho src/core/database/typeorm/migrations
yarn migration:create
```

### Para rodar atualizar as migrations

```bash
# Rodará as migrations do caminho src/core/database/typeorm/migrations
yarn migration:up
```

### Para dar um revert (Rollback) nas migrations

```bash
# Rodará as migrations do caminho src/core/database/typeorm/migrations
yarn migration:revert
```

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
