# Sistema de Controle de Solicitações

Projeto desenvolvido como avaliação técnica para estágio em Automação de Processos.

---

# Tecnologias utilizadas

## Front-end
- HTML
- CSS
- JavaScript

## Back-end
- ASP.NET Core Web API
- C#
- Entity Framework Core InMemory

---

# Funcionalidades

- Cadastro de solicitações
- Listagem de solicitações
- Atualização de status
- Exclusão de solicitações
- Filtro por status
- Resumo dinâmico
- Validação de campos obrigatórios

---

# Estrutura do Projeto

```txt
controle-solicitacoes
├── back-end
└── front-end
```

---

# Como executar o projeto

## Back-end

Entrar na pasta:

```bash
cd back-end
```

Executar a API:

```bash
dotnet run
```

A API ficará disponível em:

```txt
http://localhost:5129
```

Swagger:

```txt
http://localhost:5129/swagger
```

---

## Front-end

Abrir o arquivo:

```txt
front-end/index.html
```

ou utilizar a extensão Live Server no VSCode.

---

# Persistência de Dados

O projeto utiliza Entity Framework Core InMemory para persistência temporária dos dados, conforme permitido nos requisitos da avaliação técnica.

---

# Autor

Josué Rodrigues