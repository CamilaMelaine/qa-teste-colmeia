# Relatório de Testes Exploratórios — ColmeIA Forms

Este repositório contém os resultados do teste exploratório realizado no sistema **ColmeIA Forms**, como parte do processo seletivo para a vaga de Analista de Testes de Software.

## O que foi testado

O objetivo foi explorar o sistema livremente, sem um roteiro fixo, buscando identificar comportamentos inesperados nas seguintes áreas:

- Autenticação (login e recuperação de senha)
- Tela de Banco de Dados (listagem, arquivamento e recarregamento de itens)
- Navegação entre telas
- Elementos de interface (ícones e menus)

## Resumo dos resultados

| Severidade | Quantidade |
|---|---|
|  Alta | 5 |
| Média | 2 |
| Baixa | 1 |
| **Total** | **8** |

## Como reproduzir os testes

Cada bug está documentado individualmente na pasta [`bugs/`](./bugs), seguindo um template padronizado com:

- **Severidade**
- **Ambiente** de teste
- **Cenário** (contexto do teste)
- **Passos para reproduzir** (numerados, na ordem exata)
- **Resultado observado** (o que de fato aconteceu)
- **Resultado esperado** (o comportamento correto)
- **Evidências** (prints de tela)

## Lista de bugs encontrados

| ID | Título | Severidade |
|---|---|---|
| [BUG-001](./bugs/BUG-001.md) | Login realizado com credenciais inválidas |  Alta |
| [BUG-002](./bugs/BUG-002.md) | Funcionalidade "Esqueceu sua senha" não responde | Alta |
| [BUG-003](./bugs/BUG-003.md) | Itens somem ao clicar no ícone de recarregar | Média |
| [BUG-004](./bugs/BUG-004.md) | Itens arquivados não são exibidos na aba de arquivados | Alta |
| [BUG-005](./bugs/BUG-005.md) | Itens somem ao navegar entre telas (Banco de Dados ↔ Colmeia Forms) | Alta |
| [BUG-006](./bugs/BUG-006.md) | Itens somem ao interagir com o ícone de alto-falante | Alta |
| [BUG-007](./bugs/BUG-007.md) | Opção de logoff não disponível/responsiva no menu do candidato | Média |
| [BUG-008](./bugs/BUG-008.md) | Cor do ícone de alto-falante é perdida após novo login | Baixa |

## Estrutura do repositório

```
.
├── README.md
├── bugs/
│   ├── BUG-001.md
│   ├── BUG-002.md
│   ├── ...
│   └── BUG-008.md
└── evidencias/
    └── (prints referenciados em cada bug)
```

## Observações

Os bugs relacionados ao desaparecimento de itens no Banco de Dados (BUG-003, BUG-005 e BUG-006) apresentam um padrão semelhante — a listagem some após determinadas interações (recarregar, navegar entre telas, clicar no ícone de alto-falante). Vale investigar se há uma causa raiz comum entre eles, possivelmente relacionada ao gerenciamento de estado da aplicação.

---

**Autor(a):** [seu nome aqui]
**Data do teste:** [data aqui]

