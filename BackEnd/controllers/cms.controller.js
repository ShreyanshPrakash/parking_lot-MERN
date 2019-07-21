const mongodb = require('mongodb').MongoClient;

// replace with dot env
let url = "mongodb://shreyansh:qwertyui123@localhost:27017/parkingLot?authSource=admin";

async function getCmsDocument( documentID, collectionID = 'cms' ){

    // getMongoDBInstance().then( client => {
    //     client.collection( collectionID ).find({}).toArray().then( document => {

    //     }).catch( err => {

    //     })
    // }).catch( err => {

    // });

    try{
        const dbInstance = await getMongoDBInstance();
        console.log( dbInstance );
        // var document = await dbInstance.collections();
        const cmsCollection = await dbInstance.collection('cms').find({}).toArray();
        console.log( cmsCollection );
        // const insert = await collection.insert({name: "Shreyansh"});
    }catch( err ) {
        console.log( err );
    }finally{   
        console.log('analytics');
    }

}

async function getMongoDBInstance(){
    // const dbInstance = await mongodb.connect( url, { useNewUrlParser: true });
    return await mongodb.connect( url, { useNewUrlParser: true });
    // return dbInstance;
    // return dbInstance.db('parkingLot');
}

module.exports = {
    getCmsDocument: getCmsDocument
}