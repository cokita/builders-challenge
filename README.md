# Desafio Platform Builders

Foi proposto um desafio pela Builders para mim, onde eu deveria desenvolver um SAP, em qualquer biblioteca, eu utilizei o Angular 11. 

Também utilizei para consultar a localização atual o Google Maps e para fazer a reversão (de latitude e longitude para endereço), utilizei o Geolocator do Google. Tentei usar a biblioteca sugerida para essa finalidade e os resultados não estavam sendo satisfatórios. Exemplo: Ao consultar as coordenadas que o Google me forneceu para o lugar onde eu moro (Sobradinho, Brasília, DF), a OpenWeather trouxe como resultado mais próximo Planaltina. Ao consultar pela cidade Sobradinho, a OpenWeather retornou as coordenadas: 

```
[
    {
    "name": "Sobradinho",
    "local_names": {
    "ascii": "Sobradinho",
    "feature_name": "Sobradinho"
    },
    "lat": -12.8333,
    "lon": -39.1,
    "country": "BR"
    }
]
```

Já o Google:

```
geometry": {
    "location": {
        "lat": -15.6433921,
        "lng": -47.7848318
    }
}
```

Para evitar problemas maiores ao projeto, tomei a liberdade de mudar a biblioteca de consumo das informações.

Para consultar as informações de tempo, utilizei a OpenWeather no seguinte endpoint: 

`http://api.openweathermap.org/data/2.5/weather?q=Sobradinho,DF,BR&units=metric&lang=pt_br&appid=`

Para recuperar a localização atual e busca de endereços, utilizei a biblioteca AGM (Angular Google Maps, `https://angular-maps.com/`).

Para recuperar o endereço de acordo com as coordenadas, utilizei o geolocator: 

 `https://maps.googleapis.com/maps/api/geocode/json?latlng=-15.643182399999997,-47.785049699999995&key=`

## Dependencias

Node 8.9 ou superior
NPM 5.5.1 ou superior
Angular CLI (npm install -g @angular/cli)

## Para executar o projeto

Realizar o git clone do projeto, entrar na pasta e executar o comando: 

```
npm install
``` 

Logo após, para testes: 

```
ng serve
```

Será compilado e disponível no endereço: http://localhost:4200

## Login

Para se autenticar no sistema, utilizar as credenciais (mockadas):

```
username: builders
senha: 123456
```

## Localização

O sistema precisa que o browser ou o sistema operacional (no caso IOS), autorize recuperar informações de localização.

## 👀 Resumo dos requisitos

Desenvolva um SPA que tenha pelo menos 2 telas: uma tela de login, pedindo um usuário e senha (mockar autenticação), e outra que consuma a localização atual do usuário e exiba na interface e no input de pesquisa o endereço atual e também os dados climáticos da região.

Deve ser possível inserir manualmente o endereço a ser buscado na API.
Para fazer essa busca, pode-se usar a API do Open Weather Map: https://openweathermap.org/api
Quem estiver deslogado deve ser redirecionado para o login.

## 📌 Condições
É permitido o uso de qualquer biblioteca
Anexar Print Screen no Readme
Utilizar Github para repositório

## 🙌 Diferenciais
Será muito bem valorizado:

Componentização
Documentação
Interface
