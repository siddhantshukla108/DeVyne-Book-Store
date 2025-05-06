const {MongoClient}=require("mongodb");
const client1=new MongoClient("mongodb://localhost:27017");

async function getconnect1()
{
	let con=await client1.connect();
	let db=con.db("training2024");
	let collection=db.collection("booksdata");
	return collection;	
}
module.exports=getconnect1;