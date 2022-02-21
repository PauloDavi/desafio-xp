# Backend - Data XP

## Tecnologias
- Node
- Nest
- Typescript
- Compression
- Helmet
- Swagger
- Eslint
- Prettier

## Como executar em ambiente local

Depois de clonar o repositorio instale as dependêcias

```
yarn

// or if you use npm

npm install

```

Atualize o arquivo `.env`

```env
// exemplo
# default Configs
PORT=3333

# JWT configs
JWT_SECRET_KEY="<top_secret>"
JWT_EXPIRATION_TIME="30d"

# Mongo configs
MONGO_URI="<mongo_uri>"
```

Depois execute:

```
yarn dev

// or if you use npm

npm run dev

```

## Documentação

A documentão do sawweger esta disponivel em `http://localhost:<PORT>/api`

![screencapture-localhost-3333-api-2022-02-20-21_33_34](https://user-images.githubusercontent.com/49069334/154871797-5a9085cc-54f1-400b-9593-ee6240533fb1.png)

## Observações
- Presumimos que o aceite do usuário quanto ao seus dados para o open finance foram dado previamente em algum ambiente XP
- Devido a um bloqueio da API disponibilizada para consumo foi necessario "mockar" os dados de usuarios e de serviços da XP, seguem os testes realizados e o retorno da API em todos os testes

Retorno do Erro
```html
<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Acesso Bloqueado</title>
   </head>
   <body>
      <blockquote>
         <table border="0" cellpadding="1" width="80%">
            <tbody>
               <tr>
                  <td><img src="https://www.xpi.com.br/assets/images/xp-inc-hero.png"></td>
               </tr>
            </tbody>
         </table>
      </blockquote>
      <br><br><br>   
      <blockquote>
         <table border="0" cellpadding="1" width="80%">
            <tbody>
               <tr>
                  <td><font face="Helvetica"><big><strong>A sua requisição foi bloqueada. Caso esteja com problemas para acessar nossos serviços, por favor entre em contato através do e-mail secops.netsec@xpi.com.br com as informações apresentadas no texto abaixo.</strong></big><br></font><br><br><font face="Helvetica"><strong>Reference ID:</strong> 0.2ed5da17.1645316274.f5a388d<br><strong>Endereço IP:</strong> 177.37.173.254<br><br></font></td>
               </tr>
            </tbody>
         </table>
      </blockquote>
   </body>
</html>
```

Teste 1 - utilizando axios no Node
```ts
const params = new URLSearchParams();
params.append('grant_type', 'client_credentials');
params.append(
  'clientId',
  'segredo',
);
params.append(
  'clientSecret',
  'segredo',
);

const { data } = await openFinancesApi.post(
  'oauth2/v1/access-token',
  params.toString(),
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
);
console.log(data);
```

Teste 2 - utilizando biblioteca nativa do node
```ts
async createToken (){
        var options = {
            'method': 'POST',
            'url': 'https://openapi.xpi.com.br/oauth2/v1/access-token',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
              'grant_type': 'client_credentials',
              'client_id': '<your_client_id>',
              'client_secret': '<your_client_secret>''
            }
          };
          return new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    const resultJson = JSON.parse(response.body)
                    console.log('OLHA O TOKEN', resultJson.access_token);
                    resolve(resultJson.access_token);
              });
        })
    }
```

## A fazer
- [ ] Resolver problema de autenticação com a API
- [ ] Criar serviço de email para recuperação de senha
- [ ] Utilizar streams para processamento de dados, para um grande volume de dados
- [ ] Criar IA para outros serviços de insights
- [ ] Revisar paramento utilizado para definir apetite de risco (atualmente esta utilizando uma margem de 10% para mais e para menos)
- [ ] Criar serviços para novas funcionalidades descritas na dinamica feita no sequenciador de features no README da home
