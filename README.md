# PetFast

Aplicação de compra e venda voltada para petshops, em que estabelecimentos conseguem expandir seu negócio através da criação de uma loja na plataforma e os clientes conseguem comprar sem sair do conforto de suas casas. 

## Integrantes do grupos
- Isabele Rocha
- Gabriela Lacerda
- Rafael Chagas
- Caíque Morelli

## Para rodar o projeto basta executar os comandos abaixo no terminal

Instalações: 

``` npm install ```

``` npm react-elastic-carousel --force ```

``` npm install styled-components ```

Para iniciar o projeto:

``` npm run server ```

``` npm start ```

```
curl --location --request POST 'http://<url thundercats>/product-catalogs-service/api/v1/product_specifications' \
--header 'Client-Realm-Id: <client realm>' \
--header 'Service-Provider-Id: <service provider>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "name",
    "description": "desciption",
    "product_number": "001",
    "valid_from": "2020-08-10T00:00:00.363Z",
    "valid_to": "2021-08-10T00:00:00.363Z",
    "product_catalog_id": "oi_recarga",
    "product_category_id": 690,
}'
```
