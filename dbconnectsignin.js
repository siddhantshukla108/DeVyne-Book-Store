const {MongoClient}=require("mongodb");
const client=new MongoClient("mongodb://localhost:27017");

async function getconnect()
{
	let con=await client.connect();
	let db=con.db("training2024");
	let collection=db.collection("signindata");
	return collection;	
}
module.exports=getconnect;