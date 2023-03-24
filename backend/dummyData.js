const { hashPassword } = require("./helpers/bcrypt")

const Employees = [
    {
      "firstName": "John",
      "lastName":"Doe",
      "email": "johndoe@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5555",
      "address": "123 Main St",
      "PositionId":1,
    },
    {
      "firstName": "Jane",
      "lastName":"Doe",
      "email": "janedoe@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5556",
      "address": "456 Park Ave",
      "PositionId":2,
    },
    {
      "firstName": "Bob",
      "lastName":"Smith",
      "email": "bobsmith@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5557",
      "address": "789 Elm St",
      "PositionId":1,
    },
    {
      "firstName": "Samantha",
      "lastName":"Jones",
      "email": "sjones@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5558",
      "address": "321 Oak St",
      "PositionId":2,
    },
    {
      "firstName": "Mike",
      "lastName":"Williams",
      "email": "mikew@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5559",
      "address": "159 Pine St",
      "PositionId":1,
    },
    {
      "firstName": "Chris",
      "lastName":"Brown",
      "email": "chrisbrown@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5560",
      "address": "753 Cedar St",
      "PositionId":2,
    },
    {
      "firstName": "Amanda",
      "lastName":"Miller",
      "email": "amandam@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5561",
      "address": "964 Birch St",
      "PositionId":1,
    },
    {
      "firstName": "Justin",
      "lastName":"Bieber",
      "email": "justinb@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5562",
      "address": "135 Maple St",
      "PositionId":2,
    },
    {
      "firstName": "Kim",
      "lastName":"Kardashian",
      "email": "kimk@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5563",
      "address": "246 Willow St",
      "PositionId":1,
    },
    {
      "firstName": "Taylor",
      "lastName":"Swift",
      "email": "taylors@gmail.com",
      "dob": "1998-12-05T12:38:21Z",
      "gender":"male",
      "phone": "555-555-5564",
      "address": "357 Sycamore St",
      "PositionId":2,
    }
  ].map(e=> {
    e.status = 'active'
    e.createdAt = new Date()
    e.updatedAt = new Date()
    return e
  }) 

  const Users = [
    {
        "name":"admin",
        "email":"admin@mail.co",
        "password":"123456",
        "gender":"male",
        "phone":"08123456789",
        "role":"admin"
    },
    {
        "name":"superadmin",
        "email":"superadmin@mail.com",
        "password":"123456",
        "gender":"male",
        "phone":"08123456789",
        "role":"superadmin"
    }
  ].map(e=> {
    e.createdAt = new Date()
    e.updatedAt = new Date()
    e.password = hashPassword(e.password)
    return e
  })

  const Positions = [
    {
      "name": "Senior Software Engineer",
      "description": "Design, develop, and maintain complex software systems using various programming languages and tools.",
      "salary": 4000000
    },
    {
      "name": "Data Scientist Manager",
      "description": "Lead a team of data scientists to collect, analyze, and interpret complex data sets using statistical and machine learning techniques.",
      "salary": 5000000
    },
    {
      "name": "Chief Technology Officer",
      "description": "Set the technology strategy and vision for a company or organization, and oversee the implementation of technology solutions.",
      "salary": 8000000
    }
  ].map(e=> {
    e.createdAt = new Date()
    e.updatedAt = new Date()
    return e
  })

  module.exports = {
    Employees,
    Users,
    Positions
  }