# movies-explorer-frontend
### дипломный проект

***Cтек технологий проекта***  
![Node.js](https://img.shields.io/badge/-html5-cae3fa?style=for-the-badge&logo=node.js@logoColor=00eeff) ![JavaScript](https://img.shields.io/badge/-CSS-cae3fa?style=for-the-badge&logo=javascript@logoColor=00eeff) ![React](https://img.shields.io/badge/-JavaScript-cae3fa?style=for-the-badge&logo=react@logoColor=00eeff) ![Git](https://img.shields.io/badge/-react-cae3fa?style=for-the-badge&logo=git@logoColor=00eeff) ![Figma](https://img.shields.io/badge/-git-cae3fa?style=for-the-badge&logo=figma@logoColor=00eeff) ![Photoshop](https://img.shields.io/badge/-express.js-cae3fa?style=for-the-badge&logo=photoshop) ![Photoshop](https://img.shields.io/badge/-mongoDB-cae3fa?style=for-the-badge&logo=photoshop)

Данный проект является упрощенной моделью онлайн кинотеатра.
Репозиторий backend части `https://github.com/IvanVideo/movies-explorer-api`


## Backend

- В проекте две сущности: пользователи и сохранённые фильмы
- Все роуты, кроме: страница логина и страницы регистрации пользователя защищены авторизацией. Если клиент не прислал JWT, доступ к роутам закры
- В проекте есть два файла для хранения логов запросов и ошибок(request.log/error.log)
- Ошибки обрабатываются централизованно в мидлвар

## Frontend

- Семантическая верстка портирована в JSX
- Все классы названы по БЭМ
- Проект является адаптивным, расчитанным под мобильное, планшейтное и десктопное расширение 
- Вёрстка на Flex layout
- Все изображения оптимизированы

## Screenshots
###### Логин пользователя на сайте 
![](https://sun9-22.userapi.com/impg/-bF-gL8a-6jfnKeIqyQQVX3vCTNUtr4WHUD3Kg/5o5V1VusayU.jpg?size=500x500&quality=96&sign=b283ff84b0d72691a52cc04ccb10dc93&type=album)

###### Регистрация пользователя на сайте
![](https://sun9-18.userapi.com/impg/tPSmFDNvFnX2K13laY0EdVEVJYdJ1KbMEzn4hw/U_5p7SeDotI.jpg?size=500x500&quality=96&sign=0b48d25359241f2cc3d6261e823428aa&type=album)

###### Аккаунт залогированного пользователя
![](https://sun9-50.userapi.com/impg/IKeZF8h4mTUA1Q3V1F_oklXlcbF5oioLDZl42g/7Bj4PG-5Iu0.jpg?size=800x530&quality=96&sign=4214f5ae089ea2911a76a7064fee5ad3&type=album)

###### Аккаунт залогированного пользователя
![](https://sun9-50.userapi.com/impg/IKeZF8h4mTUA1Q3V1F_oklXlcbF5oioLDZl42g/7Bj4PG-5Iu0.jpg?size=800x530&quality=96&sign=4214f5ae089ea2911a76a7064fee5ad3&type=album)

###### Главная страница проекта
![](https://sun9-84.userapi.com/impg/sdFkFVSwFC63LFT00ZC4QcNYh0UD9Bj3a66aUg/FcxZ1z-IC9Q.jpg?size=800x450&quality=96&sign=b48c18cc33ad0d9e225010965408b812&type=album)
![](https://sun9-12.userapi.com/impg/4mzDww6qdsFMjj3msTU6x4___HQn5BTO687Pbg/M8HL46D666o.jpg?size=800x370&quality=96&sign=7f888b52643f2ecf5c6948783d82b430&type=album)
![](https://sun9-34.userapi.com/impg/OvEZ0AKKChZyKqZAJ45bUkBeUKLJfDE5gIvyxA/AtdbViLL-hQ.jpg?size=800x370&quality=96&sign=00a4428680b97d42e3545fe64ad2987f&type=album)
![](https://sun9-79.userapi.com/impg/q62NR9l6OkLtgQCmmZEA8MZQZIiu53GeYmF18g/Sr7y737due4.jpg?size=800x500&quality=96&sign=c753abb1b7bf47f8b4fe62cada57925e&type=album)

###### Страница с фильмами
![](https://sun9-35.userapi.com/impg/ALQRbPey5IU_5MEK314A5YxEsA2V66c13a4niw/R1eE_26xTyY.jpg?size=800x500&quality=96&sign=4c9723a26ef3132ab272b528e24b633d&type=album)
###### Страница сохраненных фильмов
![](https://sun9-4.userapi.com/impg/v5zW4Zq0e9Xr0C7IlAAW-J3_192C6BKjfyQ2wA/b42oVCRAEMQ.jpg?size=800x500&quality=96&sign=c61bcbf572a8e9ee8925c4d62d4521b9&type=album)
###### Фильтрация короткометражных фильмов
![](https://sun9-39.userapi.com/impg/on2PE8XJGdCUbHZ0VvnTOd_Te2lHSZI_Rbxlog/mQGLpN0LWjo.jpg?size=800x500&quality=96&sign=7c6c27cd17c399b5a2c0d4c348799b58&type=album)

ссылка на макет проекта https://www.figma.com/file/piPapHrQbC1XmveyAGa8V5/?node-id=891%3A3857
