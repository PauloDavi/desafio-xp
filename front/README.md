# Front - Data XP

## Tecnologias
- Vite
- React
- Typescript
- Chakra UI
- Framer Motion
- Eslint
- Prettier

## Como executar em ambiente local

Depois de clonar o repositório instale as dependências

```
yarn

// with npm

npm install

```

Copie o arquivo `.env.example` para `.env` e preencha com a url da API deste mesmo projeto (caso não mude nada na API deste projeto pode manter o valor default)

```env
// exemplo
VITE_API_BASE_URL="<url_api>"
```

Depois execute:

```
yarn dev

// with npm

npm run dev

```

Com a aplicação funcionando basta fazer login utilizar um email válido e uma senha qualquer.

## A fazer
- [ ] Criar serviço de email para recuperação de senha
- [ ] Utilizar API para login e na criação de usuário, que apesar da API ter essas funcionalidades elas não foram utilizadas aqui para facilitar testes e não depender de um banco de dados.
- [ ] Melhorar UX/UI
- [ ] Adicionar funcionalidade a alguns botões e banners que atualmente são somente visuais
- [ ] Ocultar informação do usuário na pesquisa de perfil até que selecione a ação
- [ ] Criar experiência do usuário para features definidas na dinâmica "Sequenciador de features" no README da home.

