require('dotenv').config();
const alogliasearch = require("algoliasearch");
const app_id = process.env.ALGOLIA_APP_ID;
const app_key = process.env.ALGOLIA_API_KEY; 
const app_i = process.env.ALGOLIA_INDEX;
const client = alogliasearch (app_id, app_key)
const index = client.initIndex(app_i);

const products = require("./products.json");


async function updateData(products){
    for(let i = 0; i < products.length; i++){
        products[i]["price"] = Math.round(products[i]["price"]*0.8);
    }

    try{
        await index.saveObjects(products);
    }catch(error){
        console.log("error found: " + error);
    }
}

updateData(products);
