
const { MongoClient } = require('mongodb');
const uri="mongodb+srv://user123:user123@cluster0.scoehft.mongodb.net/?retryWrites=true&w=majority"

//Operaciones CRUD

//Create insertOne()

async function crearPropiedad(nuevaPropiedad){
    const cliente = new MongoClient(uri);

    try{
    await cliente.connect();

    const result=await cliente.db("sample_airbnb").collection("listingsAndReviews")
    .insertOne(nuevaPropiedad);

    console.log(`Se creo una nueva propiedad con el siguiente id: ${result.insertedId}`);

}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }

    

 

//Read findOne()

async function buscarPropiedad(nombrePropiedad){
    const cliente = new MongoClient(uri);

    try{
   await cliente.connect();
   const result =await cliente.db("sample_airbnb").collection("listingsAndReviews")
   .findOne({name: nombrePropiedad})

   if(result){
    console.log(`Se encontro la propiedad de nombre ${nombrePropiedad}`)
    console.log(result);
   }
   else {
    console.log(`No se encontro la propiedad de nombre ${nombrePropiedad}`)
   }

}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }



//Update updateOne()

async function actualizarPropiedad(nombrePropiedad,campoActualizar){
    const cliente = new MongoClient(uri);

    try{
   await cliente.connect();
   const result = await cliente.db("sample_airbnb").collection("listingsAndReviews")
   .updateOne({name:nombrePropiedad},{$set:{summary:campoActualizar}})
    console.log(`${result.matchedCount}propiedade(s) cumplen con el criterio de busquedad`);
    console.log(`${result.modifiedCount}propiedade(s) fue(ron) actualizada(s)`);


}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }


//Delete deleteOne()

async function eliminarPropiedad(nombrePropiedad){
    const cliente = new MongoClient(uri);

    try{
   await cliente.connect();
   const result = await cliente.db("sample_airbnb").collection("listingsAndReviews")
   .deleteOne({name:nombrePropiedad})
   console.log(`${result.deletedCount}propiedade(s) fue(ron) eliminada(s)`);
  
}catch(e){
    console.log(e);
}finally{
    await cliente.close();
}
    }



module.exports={
    crearPropiedad,
    buscarPropiedad,
    actualizarPropiedad,
    eliminarPropiedad
}
