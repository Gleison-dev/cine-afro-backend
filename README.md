
# Cineafro

O cineafro é um portal dedicado a celebrar a riqueza, diversidade e potência das narrativas negras no cinema. Nosso objetivo é ser um espaço de descoberta, reflexão e valorização das histórias que amplificam vozes negras ao redor do mundo.


## Documentação da API

#### Cadastrar filme

```http
  POST https://cine-afro-backend.onrender.com/createMovie
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. O título do filme |
| `genre` | `string` | **Obrigatório**. A gênero do filme |
| `year_release` | `integer` | **Obrigatório**. O ano de lançamento do filme |
| `synopsis` | `string` | **Obrigatório**. A sinopse do filme |
| `trailer` | `string` | **Obrigatório**. O link do trailer do filme |
| `streaming` | `string` | **Obrigatório**. O link do streaming do filme |
| `url_image` | `string` | **Obrigatório**. O link de imagem do filme |

#### Listar todos os filmes

```http
  GET https://cine-afro-backend.onrender.com/movies
```

#### Listar filme por gênero

```http
  GET https://cine-afro-backend.onrender.com/movieByGenre?genre={genre}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `genre` | `string` | **Obrigatório**. O gênero do filme |

#### Listar filme por título

```http
  GET https://cine-afro-backend.onrender.com/movieByTitle?title={title}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. O título do filme |

#### Deletar filme

```http
  DELETE https://cine-afro-backend.onrender.com/deleteMovie?id={id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. O ID do filme |


## Instalação

Como instalar, configurar o projeto e rodar o projeto.

#### 1. Clone o repositório do projeto
```bash
    git clone https://github.com/Gleison-dev/cine-afro-backend.git
```

#### 2. Navegue até o diretório do projeto
```bash
    cd cine-afro-backend
```

#### 3. Instale as dependências do projeto
```bash
    npm install
```

#### 4. Configue o banco de dados local
```bash
    Crie um banco de dados - MySql, Postgres, etc.
    Crie um arquivo .env e coloque as seguintes informações:
    PGHOST=localhost
    PGDATABASE=nome_do_banco
    PGUSER=seu_usuário
    PGPASSWORD=senha_do_banco
    PORT=porta do server (express)
```

#### 5. Execute o projeto em modo desenvolvimento
```bash
    npm run dev
```
## Stack utilizada

**Back-end:** Node.js, Express.js, Sequelize, Postgres


## Autor

- [@Gleison-dev](https://github.com/Gleison-dev)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

