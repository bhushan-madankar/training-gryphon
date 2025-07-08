const dbCon = require('./config/database');

async function connectDB(){
    await dbCon();
}
connectDB();
