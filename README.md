# Test-Almundo
Ejercicio-fullstack-mobile a JavaScript API for check hotels


### Technologies
- Javascript
- Express
- Node.js
- Mongodb
- Mongoose
- ES6
- Heroku for Deployment

# How to use

```
git clone https://github.com/cesarpelaez92/almundo-hotels-api.git
cd almundo-hotels-api
npm install
npm start
```



# Endpoints

```
- GET     /hotels - get all hotels
- GET     /hotels?name=name - get an hotel by name
- GET     /hotels/:id  - get hotel by id
- POST    /hotels - create an hotel
- PATCH   /hotels/:id
- DELETE  /hotels/:id

```

# Http Status Code Summary

```
200 OK - Everything worked as expected
201 OK - Resource created
400 Bad request - The request due to something that is perceived to be a client error
500 Internal Server error - The server has encountered a situation it doesn't know how to handle.
```

## Get all hotels

## GET /hotels

##### Example

##### Request

```
GET /hotels
```

##### Response
```
[   
    {
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/0e/03/6f/7a/vue-de-l-interieur.jpg"
        ],
        "_id": "5e0f8e0970205665f687bfbc",
        "name": "Hotel paraiso",
        "stars": 5,
        "price": 5000,
        "__v": 0
    },
    {
        "images": [
            "https://i1.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/07/free-stays-luxury-hotels.jpg?fit=1654%2C931&ssl=1"
        ],
        "_id": "5e0f8e4770205665f687bfbd",
        "name": "Hotel Buenavista",
        "stars": 5,
        "price": 10000,
        "__v": 0
    },
]
```
##  Get an hotel by name

##  /hotels?name=name

##### Example

##### Request

```
GET /hotels?name=Hotel paraiso
```

##### Response
```
[
    {
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/0e/03/6f/7a/vue-de-l-interieur.jpg"
        ],
        "_id": "5e0f8e0970205665f687bfbc",
        "name": "Hotel paraiso",
        "stars": 5,
        "price": 5000,
        "location": "Avenida El paso 1.5 km, Santa Fé de Antioquia",
        "imageLocation": "https://www.google.com/maps/vt/data=kEaKjnDfKoFDw55K3XmbCgitbaMUrquTemHSJfORlTG4gBaUBqq1xSIKsCf_p_fQYbwa8Ekoe5S3vt2ZhriO3zS--O8xYp37AbyGAuV6GKT8B7nGv45XL-gZfcI3MjzxSECTnr0gBT-6h8daP3M50b8kOa3nH-AU5y2J2Th59ajcrJuwKDcL6CL8wE8CBh9GMTN9--ioFY1vciVWLSLZoBSJe1JWgz1TwhuOzpw",
        "__v": 0
    
    }
]
```
##  Get an hotel by id

##  /hotels/:id

##### Example

##### Request

GET /hotels/5e0f8e0970205665f687bfbc

##### Response
```

    {
        "images": [
            "https://media-cdn.tripadvisor.com/media/photo-s/0e/03/6f/7a/vue-de-l-interieur.jpg"
        ],
        "_id": "5e0f8e0970205665f687bfbc",
        "name": "Hotel paraiso",
        "stars": 5,
        "price": 5000,
        "location": "Avenida El paso 1.5 km, Santa Fé de Antioquia",
        "imageLocation": "https://www.google.com/maps/vt/data=kEaKjnDfKoFDw55K3XmbCgitbaMUrquTemHSJfORlTG4gBaUBqq1xSIKsCf_p_fQYbwa8Ekoe5S3vt2ZhriO3zS--O8xYp37AbyGAuV6GKT8B7nGv45XL-gZfcI3MjzxSECTnr0gBT-6h8daP3M50b8kOa3nH-AU5y2J2Th59ajcrJuwKDcL6CL8wE8CBh9GMTN9--ioFY1vciVWLSLZoBSJe1JWgz1TwhuOzpw",
        "__v": 0
    
    }

```

## create an hotel

## POST /hotels

##### Example

###### Request

POST /hotels

Body

```
    {
        "images" : "https://media-cdn.tripadvisor.com/media/photo-s/0e/03/6f/7a/vue-de-l-i..."
        "hotelName": "viajerito",
        "hotelStars": "3",
        "hotelPrice": "500"
        "location" : "avenida los camellos 1.5km Armenia -quindio"
        "imageLocation": "https://www.google.com/maps/vt/data=kEaKjnDfKoFDw55K3XmbCgitbaMUrquTemHSJfORlTG4gBaUBqq1xSIKsCf_p_fQYbwa8Ekoe5S3vt2ZhriO3zS--O8xYp37AbyGAuV6GKT8B7nGv45XL-gZfcI3MjzxSECTnr0gBT-6h8daP3M50b8kOa3nH-AU5y2J2Th59ajcrJuwKDcL6CL8wE8CBh9GMTN9--ioFY1vciVWLSLZoBSJe1JWgz1TwhuOzpw"
    }	

```

###### Response

```
{
        "images" : "https://media-cdn.tripadvisor.com/media/photo-s/0e/03/6f/7a/vue-de-l-i..."
        "_id": "5e10d0dc5d62d932bc0c7109",
        "hotelName": "viajerito",
        "hotelStars": "3",
        "hotelPrice": "500"
        "location" : "avenida los camellos 1.5km Armenia -quindio"
        "imageLocation": "https://www.google.com/maps/vt/data=kEaKjnDfKoFDw55K3XmbCgitbaMUrquTemHSJfORlTG4gBaUBqq1xSIKsCf_p_fQYbwa8Ekoe5S3vt2ZhriO3zS--O8xYp37AbyGAuV6GKT8B7nGv45XL-gZfcI3MjzxSECTnr0gBT-6h8daP3M50b8kOa3nH-AU5y2J2Th59ajcrJuwKDcL6CL8wE8CBh9GMTN9--ioFY1vciVWLSLZoBSJe1JWgz1TwhuOzpw"
}
```


## Delete an hotel by id

## DELETE /hotels/:id

##### Example

##### Request

```
DELETE /hotels/:id
```

##### Response
```
[   
    "Hotel with id: 5e10cfa35d62d932bc0c7108 deleted!"
]
```
## update an hotel

## PATCH /hotels/:id

##### Example

###### Request

PATCH /hotels/5e10d0dc5d62d932bc0c7109

Body

```
    {
        "_id": "5e10d0dc5d62d932bc0c7109",
        "hotelName": "viajerito2"
        
    }	

```

###### Response

```
{
        "images" : "https://media-cdn.tripadvisor.com/media/photo-s/0e/03/6f/7a/vue-de-l-i..."
        "_id": "5e10d0dc5d62d932bc0c7109",
        "hotelName": "viajerito2",
        "hotelStars": "3",
        "hotelPrice": "500"
        "location" : "avenida los camellos 1.5km Armenia -quindio"
        "imageLocation": "https://www.google.com/maps/vt/data=kEaKjnDfKoFDw55K3XmbCgitbaMUrquTemHSJfORlTG4gBaUBqq1xSIKsCf_p_fQYbwa8Ekoe5S3vt2ZhriO3zS--O8xYp37AbyGAuV6GKT8B7nGv45XL-gZfcI3MjzxSECTnr0gBT-6h8daP3M50b8kOa3nH-AU5y2J2Th59ajcrJuwKDcL6CL8wE8CBh9GMTN9--ioFY1vciVWLSLZoBSJe1JWgz1TwhuOzpw"
}
```
