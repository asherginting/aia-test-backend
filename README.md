<a href="https://aimeos.org/">
    <img src="https://user-images.githubusercontent.com/39787908/165537085-22b9b71d-16e8-4fce-8305-0c6a2abfff35.png" height="80" alt="AIA-Logo" title="AIA" align="right" />
</a>

# AIA Test Backend

Simple Coding Test for AIA Nodejs Fullstack Engineer



[![Postman](https://user-images.githubusercontent.com/39787908/165538995-8a6cb8d6-2be5-4b08-8a9c-c56411062d8e.png)](#)

## ⌛️ Installation

1. Clone this repo
```
git clone https://github.com/asherginting/aia-test-backend
```

2. cd folder
```
aia-test-backend

```
3. Install module
```
npm install
```

4. Make your .env file in project


5. Done, ```npm run start``` to run the project

<br>

Runs the app default in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

<br>

## Response
|       Response       |        Description        |
| :------------------: | :-----------------------: |
| ```success: true```  | List Data from Flick API  |
| ```success: false``` | Cannot Find Data From API |
|      ```Data```      | Get Array of Images Data  |
|      ```Data```      | Get Array of Images Data  |
|    ```pageInfo```    |      Pagination Data      |

<br>

## Parameters
|     Parameter     |        Description        |
| :---------------: | :-----------------------: |
| ```currentPage``` | page number of pagination |
|    ```limit```    |     limit every page      |
|  ```totalPage```  |   total Data in 1 page    |
|  ```totalData```  |      total All Data       |
|    ```tags```     |   keyword search Image    |


<br>

## ⛏️ Built Using

- [Express Js](https://www.npmjs.com/package/express)
- [axios](https://www.npmjs.com/package/axios)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<br>

## 💻 Deploy Backend & Repo Frontend

Deploy Backend : https://aia-backend.herokuapp.com/
<br>
Repo Frontend : https://github.com/asherginting/aia-test-frontend

<br>

## ✍️ Authors

- [@asherginting](https://github.com/asherginting)