//to start Mongo Shell 
mongo
//to check how many data Bases are present in Mongo DB
show Dbs 

//creating a database  named Product
use Product

//to create a collection named Smart Phone
Dbs.createCollection("SmartPhones")

//to drop a collection
Dbs.drop()

//what type of Informations can we store on Mongo DB?

Mongo DB stores Informations as Bsons so we can save the data types 
like String, int , double, booleans,arrays,objects,date,object_id,date,

//Additional Data types in Mongo DB

TimeStamp,Binary Data , Regular Expressions, JScodes  
 
//to insert one data into collection 
DB.smartPhones.insertOne({name:"",major:"",})