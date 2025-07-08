// for item.js ========================
const connectDB = require('./config/database.js');
const Item = require('./models/item.js');

async function runCrud() {
    await connectDB(); // Connect to the database

    // Create  --- run this part only once to add a new item
    // const newItem = new Item({
    //     id: 1,
    //     name: 'Item 1',
    //     quantity: 10,
    //     rate: 100
    // });
    // await newItem.save(); // Save the new item to the database

    // // Read -- uncomment this part to fetch all items and read after updating
    // const items = await Item.find(); // Fetch all items from the database
    // console.log('Items:', items);
    // process.exit(0); // Exit the process after the operation is complete

    // Update
    const updated = await Item.findOneAndUpdate(
        { id: 1 }, // Find item with id 1
        { name: 'Updated Item 1', quantity: 20, rate: 150 }, // Update fields
        { new: true } // Return the updated document
    );
    console.log('Updated Item:', updated);

    // Delete
    const deleted = await Item.findOneAndDelete({ id: 1 }); // Delete item with id 1
    console.log('Deleted Item:', deleted);

    // Read -- uncomment this part to fetch all items and read after updating
    const items = await Item.find(); // Fetch all items from the database
    console.log('Items:', items);
    process.exit(0); // Exit the process after the operation is complete
}

runCrud();


// for emp.js ------------------
// const connectDB= require('./config/database.js');
// const Emp = require('./models/emp.js');

// async function runCrud() {
//      await connectDB(); // Connect to the database
//      //create 
//      const newEmp=new Emp({ id:1,name:'john'});
//      await newEmp.save(); // Save the new employee to the database

//      //read
//      const employees=await Emp.find(); // Fetch all employees from the database
//         console.log('Employees:', employees);
//         process.exit(0); // Exit the process after the operation is complete
// }

// runCrud();


// import {add, subtract, multiply, divide} from './calci.js'; 

// console.log('Addition:', add(10, 5)); // 15
// console.log('Subtraction:', subtract(10, 5)); // 5
// console.log("multiplication:", multiply(10, 5)); // 50
// console.log("Division:", divide(10, 5)); // 2
// console.log("Division by zero:", divide(10, 0)); // "Cannot divide by zero"