const express=require("express");
const getconnect=require("./dbconnectsignin");
const getconnect1=require("./dbconnectbookdata");

const app=express();
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.get("/sign-in",(req,res)=>{
	res.render("sign-in");
});
app.get("/insertdata", async (req,res)=>
{
	let gusername=req.query.gusername;
	let gpassword=req.query.gpassword;
	let gemail=req.query.gemail;
	let collection=await getconnect();
	let r=collection.insertOne({username:gusername,password:gpassword,email:gemail});
	let records=await collection.find({}).toArray();
	console.log(gusername);
    console.log(gpassword);
    console.log(gemail);
    res.render("home");
});

app.get("/home",(req,res)=>
	{
		res.render("home");});

app.get("/confirm",(req,res)=>
	{
		res.render("confirm");});

app.get("/ebooks",(req,res)=>
	{
		res.render("ebooks");});

app.get("/feedback",(req,res)=>
	{
		res.render("feedback");});

app.get("/add-to-cart",(req,res)=>
	{
		res.render("add-to-cart");});
app.get("/shop-now",(req,res)=>
	{
		res.render("shop-now");
	});


app.get("/checksearch",(req,res)=>{
		let un=req.query.usrsrch;
		if(un=="Geeta")
		    res.render("shop-now");
		else if(un=="geeta")
			res.render("shop-now");
		else if(un=="gita")
			res.render("shop-now");
		else if(un=="Bible")
			res.render("shop-now");
		else if(un=="bible")
			res.render("shop-now");
		else if(un=="Quraan")
			res.render("shop-now");
		else if(un=="Quarn")
			res.render("shop-now");
		else if(un=="quraan")
			res.render("shop-now");
		else if(un=="quran")
			res.render("shop-now");
		else if(un=="ncert")
			res.render("shop-now");
		else if(un=="NCERT")
			res.render("shop-now");
		else if(un=="ncrt")
			res.render("shop-now");
		else
			res.render("soon-page");
});
app.get("/bookadd",(req,res)=>{
	res.render("addedbooktocart");
});

app.get("/avail-book",async(req,res)=>{
	let collection=await getconnect1();
	let records=await collection.find({}).toArray();
   // console.log(records);
	res.render("avail-book",{records});
});
app.get("/booksinf",(req,res)=>{
	res.render("shop-now");

});

app.listen(5000,()=>console.log("Server is running"));