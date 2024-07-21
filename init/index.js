// Require package
const mongoose = require("mongoose");
const initData = require("./data.js"); //import data (from: data.js)
const Listing = require("../models/listing.js"); //import listing (from: listing.js)

//Connect Mongoose Url (from: mongoosh DOCs)
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
//Create a Function to Connect our DB
main()
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

//Insert Data
const initDB = async ()=>{
    await Listing.deleteMany({}); // First clear all data from DB
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "669932184aa5d0e2dbcd0228",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB(); //Call initDB