const { hashPassword } = require("./helpers/bcrypt")

const Employees = [
    {
      "firstName": "John",
      "lastName":"Doe",
      "email": "johndoe@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/1.jpg",
      "dob": "1985-07-15T05:22:39Z",
      "gender":"male",
      "phone": "555-555-1234",
      "address": "123 Main St",
      "PositionId":2
    },
    {
      "firstName": "Jane",
      "lastName":"Doe",
      "email": "janedoe@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/1.jpg",
      "dob": "1992-02-28T10:08:16Z",
      "gender":"female",
      "phone": "555-555-5678",
      "address": "456 Elm St",
      "PositionId":1
    },
    {
      "firstName": "Robert",
      "lastName":"Smith",
      "email": "robertsmith@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/2.jpg",
      "dob": "1978-11-19T17:45:12Z",
      "gender":"male",
      "phone": "555-555-2345",
      "address": "789 Oak St",
      "PositionId":3
    },
    {
      "firstName": "Emily",
      "lastName":"Johnson",
      "email": "emilyjohnson@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/2.jpg",
      "dob": "1990-09-03T02:11:08Z",
      "gender":"female",
      "phone": "555-555-6789",
      "address": "1010 Maple St",
      "PositionId":1
    },
    {
      "firstName": "Michael",
      "lastName":"Williams",
      "email": "michaelwilliams@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/3.jpg",
      "dob": "1982-04-12T13:34:23Z",
      "gender":"male",
      "phone": "555-555-3456",
      "address": "1212 Pine St",
      "PositionId":2
    },
    {
      "firstName": "Olivia",
      "lastName":"Brown",
      "email": "oliviabrown@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/3.jpg",
      "dob": "1995-01-25T21:56:47Z",
      "gender":"female",
      "phone": "555-555-7890",
      "address": "1414 Cedar St",
      "PositionId":1
    },
    {
      "firstName": "David",
      "lastName":"Garcia",
      "email": "davidgarcia@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/4.jpg",
      "dob": "1976-08-05T09:43:31Z",
      "gender":"male",
      "phone": "555-555-4567",
      "address": "1616 Oak St",
      "PositionId":3
    },
    {
      "firstName": "Jessica",
      "lastName":"Lee",
      "email": "jessicalee@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/4.jpg",
      "dob": "1994-03-22T14:09:11Z",
      "gender":"female",
      "phone": "555-555-8901",
      "address": "1818 Elm St",
      "PositionId":1
    },
    {
      "firstName": "Daniel",
      "lastName":"Kim",
      "email": "danielkim@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/5.jpg",
      "dob": "1988-10-31T07:23:17Z",
      "gender":"male",
      "phone": "555-555-1234",
      "address": "2020 Cedar St",
      "PositionId":2
    },
    {
      "firstName": "Ashley",
      "lastName":"Chen",
      "email": "ashleychen@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/5.jpg",
      "dob": "1991-06-08T18:45:09Z",
      "gender":"female",
      "phone": "555-555-5678",
      "address": "2222 Pine St",
      "PositionId":1
    },
    {
      "firstName": "Kevin",
      "lastName":"Park",
      "email": "kevinpark@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/6.jpg",
      "dob": "1983-11-16T10:37:52Z",
      "gender":"male",
      "phone": "555-555-2345",
      "address": "2424 Oak St",
      "PositionId":3
    },
    {
      "firstName": "Emily",
      "lastName":"Wang",
      "email": "emilywang@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/6.jpg",
      "dob": "1997-01-29T23:12:06Z",
      "gender":"female",
      "phone": "555-555-6789",
      "address": "2626 Cedar St",
      "PositionId":1
    },
    {
      "firstName": "William",
      "lastName":"Nguyen",
      "email": "williamnguyen@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/7.jpg",
      "dob": "1980-09-17T15:28:14Z",
      "gender":"male",
      "phone": "555-555-3456",
      "address": "2828 Pine St",
      "PositionId":2
    },
    {
      "firstName": "Sophia",
      "lastName":"Tran",
      "email": "sophiatran@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/7.jpg",
      "dob": "1993-04-12T05:53:33Z",
      "gender":"female",
      "phone": "555-555-7890",
      "address": "3030 Oak St",
      "PositionId":1
    },
    {
      "firstName": "Ryan",
      "lastName":"Johnson",
      "email": "ryanjohnson@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/7.jpg",
      "dob": "1989-05-23T09:21:43Z",
      "gender":"male",
      "phone": "555-555-3456",
      "address": "2727 Maple St",
      "PositionId":2
    },
    {
      "firstName": "Sophia",
      "lastName":"Garcia",
      "email": "sophiagarcia@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/7.jpg",
      "dob": "1992-07-15T14:33:09Z",
      "gender":"female",
      "phone": "555-555-7890",
      "address": "3030 Pine St",
      "PositionId":1
    },
    {
      "firstName": "Jason",
      "lastName":"Lee",
      "email": "jasonlee@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/8.jpg",
      "dob": "1980-12-04T20:55:28Z",
      "gender":"male",
      "phone": "555-555-4567",
      "address": "3333 Cedar St",
      "PositionId":3
    },
    {
      "firstName": "Isabella",
      "lastName":"Kim",
      "email": "isabellakim@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/8.jpg",
      "dob": "1998-02-17T02:45:03Z",
      "gender":"female",
      "phone": "555-555-8901",
      "address": "3636 Oak St",
      "PositionId":1
    },
    {
      "firstName": "William",
      "lastName":"Chen",
      "email": "williamchen@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/9.jpg",
      "dob": "1973-09-07T06:13:39Z",
      "gender":"male",
      "phone": "555-555-1234",
      "address": "3939 Pine St",
      "PositionId":2
    },
    {
      "firstName": "Natalie",
      "lastName":"Park",
      "email": "nataliepark@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/women/9.jpg",
      "dob": "1990-12-19T12:07:15Z",
      "gender":"female",
      "phone": "555-555-5678",
      "address": "4242 Cedar St",
      "PositionId":1
    },
    {
      "firstName": "Charles",
      "lastName":"Nguyen",
      "email": "charlesnguyen@example.com",
      "imgUrl":"https://randomuser.me/api/portraits/men/10.jpg",
      "dob": "1985-03-30T17:39:51Z",
      "gender":"male",
      "phone": "555-555-2345",
      "address": "4545 Oak St",
      "PositionId":3
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
        "imgUrl":"https://randomuser.me/api/portraits/men/61.jpg",
        "gender":"male",
        "phone":"08123456789",
        "role":"admin"
    },
    {
        "name":"superadmin",
        "email":"superadmin@mail.com",
        "password":"123456",
        "imgUrl":"https://randomuser.me/api/portraits/men/60.jpg",
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