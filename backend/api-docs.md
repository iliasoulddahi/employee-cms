# Employee-cms API Documentation

## Endpoints :

List of available endpoints:

Auth:

- `POST /auth/login`
- `POST /auth/register-admin`

Employee:

- `POST /employee`
- `GET /employee`
- `GET /employee/:id`
- `PUT /employee/:id`
- `PATCH /employee/:id`
- `DELETE /employee/:id`

Positions:

- `GET /employee/position`

&nbsp;

## POST /auth/login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "token": "string",
  "username": "string",
  "imgUrl": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "string"
}
```

## POST /auth/register-admin

Request:

- body:

```json
{
  "name": "admin",
  "email": "admin@mail.com",
  "password": "123456",
  "imgUrl": "https://randomuser.me/api/portraits/men/60.jpg",
  "gender": "male",
  "phone": "08123456789",
  "role": "admin"
}
```

_Response (201 - OK)_

```json
{
  "id": "1",
  "email": "admin@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "string"
}
```

## GET /employee

Request:

- headers:

```json
{
  "token": "string"
}
```

- queryParam (optional):

```json
{
  "position": "string",
  "size": "integer",
  "page": "integer",
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "totalItems": 5,
  "employees": [
    {
      "id": 3,
      "firstName": "Robert",
      "lastName": "Smith",
      "email": "robertsmith@example.com",
      "imgUrl": "https://randomuser.me/api/portraits/men/2.jpg",
      "dob": "1978-11-19T17:45:12.000Z",
      "gender": "male",
      "phone": "555-555-2345",
      "address": "789 Oak St",
      "status": "active",
      "PositionId": 3,
      "createdAt": "2023-03-25T12:18:34.051Z",
      "updatedAt": "2023-03-25T12:18:34.051Z",
      "Position": {
        "id": 3,
        "name": "Chief Technology Officer",
        "description": "Set the technology strategy and vision for a company or organization, and oversee the implementation of technology solutions.",
        "salary": 8000000,
        "createdAt": "2023-03-25T12:18:35.245Z",
        "updatedAt": "2023-03-25T12:18:35.245Z"
      }
    },
    {
      "id": 7,
      "firstName": "David",
      "lastName": "Garcia",
      "email": "davidgarcia@example.com",
      "imgUrl": "https://randomuser.me/api/portraits/men/4.jpg",
      "dob": "1976-08-05T09:43:31.000Z",
      "gender": "male",
      "phone": "555-555-4567",
      "address": "1616 Oak St",
      "status": "active",
      "PositionId": 3,
      "createdAt": "2023-03-25T12:18:34.051Z",
      "updatedAt": "2023-03-25T12:18:34.051Z",
      "Position": {
        "id": 3,
        "name": "Chief Technology Officer",
        "description": "Set the technology strategy and vision for a company or organization, and oversee the implementation of technology solutions.",
        "salary": 8000000,
        "createdAt": "2023-03-25T12:18:35.245Z",
        "updatedAt": "2023-03-25T12:18:35.245Z"
      }
    },
    {
      "id": 11,
      "firstName": "Kevin",
      "lastName": "Park",
      "email": "kevinpark@example.com",
      "imgUrl": "https://randomuser.me/api/portraits/men/6.jpg",
      "dob": "1983-11-16T10:37:52.000Z",
      "gender": "male",
      "phone": "555-555-2345",
      "address": "2424 Oak St",
      "status": "active",
      "PositionId": 3,
      "createdAt": "2023-03-25T12:18:34.051Z",
      "updatedAt": "2023-03-25T12:18:34.051Z",
      "Position": {
        "id": 3,
        "name": "Chief Technology Officer",
        "description": "Set the technology strategy and vision for a company or organization, and oversee the implementation of technology solutions.",
        "salary": 8000000,
        "createdAt": "2023-03-25T12:18:35.245Z",
        "updatedAt": "2023-03-25T12:18:35.245Z"
      }
    },
    {
      "id": 17,
      "firstName": "Jason",
      "lastName": "Lee",
      "email": "jasonlee@example.com",
      "imgUrl": "https://randomuser.me/api/portraits/men/8.jpg",
      "dob": "1980-12-04T20:55:28.000Z",
      "gender": "male",
      "phone": "555-555-4567",
      "address": "3333 Cedar St",
      "status": "active",
      "PositionId": 3,
      "createdAt": "2023-03-25T12:18:34.051Z",
      "updatedAt": "2023-03-25T12:18:34.051Z",
      "Position": {
        "id": 3,
        "name": "Chief Technology Officer",
        "description": "Set the technology strategy and vision for a company or organization, and oversee the implementation of technology solutions.",
        "salary": 8000000,
        "createdAt": "2023-03-25T12:18:35.245Z",
        "updatedAt": "2023-03-25T12:18:35.245Z"
      }
    },
    {
      "id": 21,
      "firstName": "Charles",
      "lastName": "Nguyen",
      "email": "charlesnguyen@example.com",
      "imgUrl": "https://randomuser.me/api/portraits/men/10.jpg",
      "dob": "1985-03-30T17:39:51.000Z",
      "gender": "male",
      "phone": "555-555-2345",
      "address": "4545 Oak St",
      "status": "active",
      "PositionId": 3,
      "createdAt": "2023-03-25T12:18:34.051Z",
      "updatedAt": "2023-03-25T12:18:34.051Z",
      "Position": {
        "id": 3,
        "name": "Chief Technology Officer",
        "description": "Set the technology strategy and vision for a company or organization, and oversee the implementation of technology solutions.",
        "salary": 8000000,
        "createdAt": "2023-03-25T12:18:35.245Z",
        "updatedAt": "2023-03-25T12:18:35.245Z"
      }
    }
  ],
  "totalPages": 1,
  "currentPage": 0
}
```

## GET /employee/:id

Request:

- headers:

```json
{
  "token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": 2,
  "firstName": "Janeee",
  "lastName": "Doe",
  "email": "janedoe@example.com",
  "imgUrl": "https://randomuser.me/api/portraits/women/1.jpg",
  "dob": "1992-02-28T00:00:00.000Z",
  "gender": "female",
  "phone": "555-555-5678",
  "address": "456 Elm St",
  "status": "inactive",
  "PositionId": 1,
  "createdAt": "2023-03-25T12:18:34.051Z",
  "updatedAt": "2023-03-25T17:59:39.469Z",
  "Position": {
    "id": 1,
    "name": "Senior Software Engineer",
    "description": "Design, develop, and maintain complex software systems using various programming languages and tools.",
    "salary": 4000000,
    "createdAt": "2023-03-25T12:18:35.245Z",
    "updatedAt": "2023-03-25T12:18:35.245Z"
  }
}
```

## post /employee

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "firstName": "Natalie",
  "lastName": "Park",
  "email": "nataliepark@example.com",
  "imgUrl": "https://randomuser.me/api/portraits/women/9.jpg",
  "dob": "1990-12-19T12:07:15Z",
  "gender": "female",
  "phone": "555-555-5678",
  "address": "4242 Cedar St",
  "PositionId": 1
}
```

_Response (200 - OK)_

```json
{
  "firstName": "Natalie",
  "lastName": "Park",
  "email": "nataliepark@example.com",
  "imgUrl": "https://randomuser.me/api/portraits/women/9.jpg",
  "dob": "1990-12-19T12:07:15Z",
  "gender": "female",
  "phone": "555-555-5678",
  "address": "4242 Cedar St",
  "PositionId": 1,
  "createdAt": "date",
  "updatedAt": "date"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "string"
}
```

## put /employee/:id

Request:

- headers:

```json
{
  "token": "string"
}
```

- body:

```json
{
  "firstName": "Natalie",
  "lastName": "Park",
  "email": "nataliepark@example.com",
  "imgUrl": "https://randomuser.me/api/portraits/women/9.jpg",
  "dob": "1990-12-19T12:07:15Z",
  "gender": "female",
  "phone": "555-555-5678",
  "address": "4242 Cedar St",
  "PositionId": 1
}
```

_Response (200 - OK)_

```json
{
  "message": "update success"
}
```

## patch /employee/:id

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "update status success"
}
```

## delete /employee/:id

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "delete success"
}
```

## get /employee/positions

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "name": "Senior Software Engineer",
  "description": "Design, develop, and maintain complex software systems using various programming languages and tools.",
  "salary": 4000000
}
```

## get /employee/positions

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "name": "Senior Software Engineer",
  "description": "Design, develop, and maintain complex software systems using various programming languages and tools.",
  "salary": 4000000
}
```


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
