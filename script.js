//Crear la base de datos//
use music_store
db.createCollection("albums")

//2.Insertar los documentos//
db.albums.insertMany([{se ponen los albumes...}])

//3.agregar available y origin//
db.albums.updateMany({}, {$set:{available: true, origin:"Importado"}})

//4.Actualizaciones//
db.albums.updateOne({sku: "M034"},{$set:{stock:15}})
db.albums.updateOne({sku: "M018"},{$set:{country:"Colombia"}})
db.albums.updateOne({sku: "M059"}, {$push:{tags :"oferta"}})
db.albums.updateOne({sku: "M012"}, {$addToSet:{tags : {$each:["nuevo","popular"]}}})
db.albums.updateOne({sku: "M025"},{$addToSet:{tags : {$each:["descuento","outlet"]}}})
db.albums.updateOne({name: "Thriller"},{$set:{price:80000}})

//5.Renombrar//
db.albums.updateMany({},{$rename:{origin: "import_type"}})

//6. Cambiar import_type//
db.albums.updateMany({"provider.country":"Colombia"}, {$rename:{import_type: "Nacional"}})

//7. Consultas//
db.albums.find({genre:"Jazz"})
db.albums.find({price:{$gt:50000}})
db.albums.find({genre:{$ne:"Rock"}})
db.albums.find({rating:{$gt:4.5}})
db.albums.find({stock:{$lt:5}})

//8.Eliminar propiedad available//
db.albums.updateMany({},{$unset :{available:""}})

//9.Eliminar el tag descuento//
db.albums.updateOne({sku: "M025"}, {$pull:{tags:"descuento"}})

//10.Eliminar los tags nuevo y popular//
db.albums.updateOne({sku: "M012"}, {$pull:{tags:{$in:["nuevo","popular"]}}})

//11. Eliminar album con sku: M043.//
db.albums.deleteOne({sku:"M043"})

//12.eliminar todos los albumes con stock 0//
db.albums.deleteMany({stock:0})