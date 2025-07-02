# 🎮 Skins Trade Control

Aplicativo mobile desenvolvido com **Expo (React Native)** para controle e cálculo de valores de **skins de Counter-Strike**, como caixas e cápsulas. Os dados são armazenados localmente via API simulada (`json-server` com `db.json`), e o app conta com testes automatizados **unitários** e **E2E (end-to-end)**.

---

## Tecnologias utilizadas

- React Native + Expo
- TypeScript
- `json-server` (para simular API REST)
- React Native Testing Library (para testes unitários)
- Cypress (para testes E2E)

---

## Diferença entre testes unitários e E2E

Testes UnitáriosValidam componentes ou funções isoladamente. Usamos @testing-library/react-native para testar, por exemplo, se o componente MainCard exibe corretamente um título ou executa a ação de clique.

Testes End-to-End (E2E)Simulam a experiência real do usuário em toda a aplicação. Com Cypress, garantimos que o fluxo de login, containers ou cálculo funcione conforme o esperado em tempo real, interagindo com todos os sistemas envolvidos.

---

## Instruções para rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Soweoff/Skins-Trade-Control-Mobile-AV2.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
yarn install
```

3. Inicie a API local (`db.json`):

```bash
npx json-server --watch database/db.json --port 8090
```

4. Rode o app:

```bash
npx expo start --web
```

5. Acesse via navegador (modo web):

- `http://localhost:8081`

---

## 🧪 Testes Unitários

Testes com [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/) garantem que componentes individuais se comportem corretamente.

### Testes implementados

**Componente `MainCard`**

- Renderiza corretamente o título
- Dispara o evento `onPress` ao clicar
- Renderiza a imagem com o `testID` esperado

### Executar testes unitários

```bash
yarn test
```

---

## Testes End-to-End (Cypress)

Utilizamos o [Cypress](https://www.cypress.io/) para testar fluxos completos da aplicação.

### Testes E2E criados

- **login.cy.js**

  - Acessa tela de login
  - Preenche email e senha
  - Verifica botão "Entrar"

- **calculadora.cy.js**

  - Acessa `/calculadora`
  - Preenche valores de skins
  - Verifica resultado do cálculo

- **list_skin.cy.js**
  - Acessa `/Itens/containers`
  - Verifica que há lista de itens e imagens

### Rodar o Cypress

1. Instale:

```bash
yarn add -D cypress
```

2. Use o comando:

```bash
TS_NODE_PROJECT=tsconfig.cypress.json yarn cypress open
```

> ⚠️ Esse comando garante compatibilidade com o TypeScript + configuração Cypress.

### Estrutura Cypress

```
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── calculadora.cy.js
│   └── list_skin.cy.js
├── support/
│   ├── e2e.ts
│   └── commands.ts
cypress.config.ts
tsconfig.cypress.json
```

---

## Diferença entre testes Unitários e E2E

| Tipo     | O que testa                                           | Ferramenta usada             |
| -------- | ----------------------------------------------------- | ---------------------------- |
| Unitário | Testa componentes isoladamente                        | React Native Testing Library |
| E2E      | Testa o fluxo completo da aplicação simulando usuário | Cypress                      |

---

## Base de dados simulada

Os dados das skins são simulados via `db.json` e incluem campos como:

```json
{
  "id": 1,
  "nome": "Kilowatt Case",
  "preco": 18.0,
  "tipo": "caixa",
  "imagem": "https://..."
}
```

Você pode editá-lo em `database/db.json`.

---

- Testes Cypress devem ser executados com o app rodando em modo web (`yarn start`)
- `json-server` precisa estar ativo em `http://localhost:8090`

---
