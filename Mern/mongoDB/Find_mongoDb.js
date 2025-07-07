// this will create employee collection
db.createCollection("employees");

db.employees.insertOne({
    eid: 101,
    ename: "Bhushan",
    department: "IT"
});

db.employees.insertOne({
    eid: 102,
    ename: "vaibhav",
    department: "Ladies"
});

db.employees.insertMany([
    {eid: 103, ename: "Sagar", department: "IT"},
    {eid: 104, ename: "Sanjay", department: "Ladies"},
    {eid: 105, ename: "Siddharth", department: "IT"},
    {eid: 106, ename: "Siddharth", department: "Ladies"}
]);

db.employees.find();
db.employees.find({ename: "Siddharth"});

// create a collection departments with id and dept name. insert 4 records, display all the records
// and find a record with dept name "sales"

db.createCollection("departments");
db.departments.insertMany([
    {id: 100, deptName: "HR"},
    {id: 101, deptName: "Sales"},
    {id: 102, deptName: "Payroll"},
    {id: 103, deptName: "Accounts"}
]);

db.departments.find();
db.departments.find({deptName: "Sales"});

db.employees.insertOne({
    _id: ObjectId("686b6245675e0191c982dc9b"),
    id: 101,
    deptName: "Maths"
});

db.employees.insertOne({
    name: "Patil",
    age: 28,
    isActive: true,
    skills: ["Node.js", "MongoDB", "Express.js"],
    address: {
        city: "Pune",
        pin: 400021
    },
    joinedOn: new Date("2024-01-01")
});

db.employees.find();
// find all employees from Pune city
db.employees.find({address: {city: "Pune"}});

db.employees.find({
    "address.city": "Mumbai",
    skills: "Node.js"
});


// Create a collection named "students" and insert records with various data types
db.students.insertMany([
{
name: "Anika",
age: 21,
isEnrolled: true,
subjects: ["Math", "Physics"],
contact: { email: "anika@mail.com", phone: "1234567890" },
joined: new Date("2024-06-01")
},
{
name: "Ravi",
age: 24,
isEnrolled: false,
subjects: ["History", "English"],
contact: { email: "ravi@mail.com", phone: "9876543210" },
joined: new Date("2023-09-15")
}
]);

// Display all records in the students collection
db.students.find();

// display only enrolled students
db.students.find({ isEnrolled: true });
// find student who joined after 2024-01-01
db.students.find({
    joined: { $gt: new Date("2024-01-01") }
});

// fetch only name and email of all students
db.students.find({}, {
    name: 1,
    "contact.email": 1,
    _id: 0 // this is projection to exclude _id field
}); // this is projection

//find students whose subject is "Math"
db.students.find({
    subjects: "Math"
});

