# ANÁLISE DAS DEPENDÊNCIAS

## 1 DEPENDÊNCIAS

### 1.1 prisma  
- **Repositório:** [GITHUB - PRISMA](https://github.com/prisma/prisma)
- **Versão utilizada no projeto:** 4.14.0
- **Versão mais atualizada:** 5.11.0
- **Descrição:** Prisma é uma biblioteca ORM (Object-Relational Mapping) de código aberto, desenvolvida para Node.js e TypeScript. Sua finalidade é simplificar a interação com bancos de dados SQL, como PostgreSQL, MySQL e SQLite.
- **Usa versionamento semântico:** SIM
- **Possui versão LTS:** NÃO

### 1.2 fastify 
- **Repositório:** [GITHUB - FASTIFY](https://github.com/fastify/fastify)
- **Versão utilizada no projeto:** 4.17.0 
- **Versão mais atualizada:** 4.26.2
- **Descrição:** fastify é um framework web leve e eficiente, especialmente desenvolvido para Node.js. Sua arquitetura é focada em alto desempenho e baixo consumo de recursos.
- **Usa versionamento semântico:** SIM
- **Possui versão LTS:** SIM

## 2 LTS FASTIFY
### Suporte de longo prazo
O Suporte de Longo Prazo (LTS) do Fastify é fornecido de acordo com o cronograma estabelecido neste documento:

As versões principais, lançamento "X" da versão semântica X.Y.Z, são suportadas por um período mínimo de seis meses a partir da data de lançamento. A data de lançamento de qualquer versão específica pode ser encontrada em [RELEASES](https://github.com/fastify/fastify/releases).

As versões principais receberão atualizações de segurança por mais seis meses a partir do lançamento da próxima versão principal. Após este período, ainda revisaremos e lançaremos correções de segurança, desde que sejam fornecidas pela comunidade e não violem outras restrições, por exemplo, a versão mínima suportada do Node.js.

As versões principais serão testadas e verificadas em relação a todas as linhas de lançamento do Node.js que são suportadas pela política LTS do Node.js dentro do período LTS dessa linha de lançamento do Fastify. Isso implica que apenas a versão mais recente do Node.js de uma determinada linha é suportada.

Um "mês" é definido como 30 dias consecutivos.

### Calendário
| Version | Release Date | End Of LTS Date | Node.js         |
|---------|--------------|------------------|-----------------|
| 1.0.0   | 2018-03-06   | 2019-09-01       | 6, 8, 9, 10, 11 |
| 2.0.0   | 2019-02-25   | 2021-01-31       | 6, 8, 10, 12, 14|
| 3.0.0   | 2020-07-07   | 2023-06-30       | 10, 12, 14, 16, 18|
| 4.0.0   | 2022-06-08   | TBD              | 14, 16, 18, 20 |

