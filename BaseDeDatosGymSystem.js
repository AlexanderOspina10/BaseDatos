use('GymSystem');
db.getMongo().getDBs();

//CREAR COLECCIONES 
use('GymSystem');
db.createCollection("Clientes");
db.createCollection("Beneficiarios");


//INSERTANDO DATOS COLLECCION CLIENTES
use('GymSystem');
db.Clientes.insertOne({"DocumentoCliente":1007510458,
"NombreCliente":"Alexander Ospina","TelefonoCliente":31354974555,
"DireccionCliente":"Calle 47 # 5-40"});
db.Clientes.insertOne({"DocumentoCliente":1100512320,
"NombreCliente":"Johany Ocampo","TelefonoCliente":3235641256,
"DireccionCliente":"Calle 50 # 30-50"});
db.Clientes.insertOne({"DocumentoCliente":1023659874,
"NombreCliente":"Esteban Rojas","TelefonoCliente":3128218425,
"DireccionCliente":"Calle 52 # 5-40"});
db.Clientes.insertOne({"DocumentoCliente":1520654785,
"NombreCliente":"Julian Lopera","TelefonoCliente":3256984587,
"DireccionCliente":"Calle 37 # 7-24"});

//INSERTANDO DATOS COLLECCION BENEFICIARIOS
use('GymSystem');
db.Beneficiarios.insertOne({"DocumentoBeneficiario":1007510458,
"NombreBeneficiario":"Alexander Ospina","TelefonoBeneficiario":31354974555,
"DireccionBeneficiario":"Calle 47 # 5-40"});
db.Beneficiarios.insertOne({"DocumentoBeneficiario":1100512320,
"NombreBeneficiario":"Johany Ocampo","TelefonoBeneficiario":3235641256,
"DireccionBeneficiario":"Calle 50 # 30-50"});
db.Beneficiarios.insertOne({"DocumentoBeneficiario":1023659874,
"NombreBeneficiario":"Esteban Rojas","TelefonoBeneficiario":3128218425,
"DireccionBeneficiario":"Calle 52 # 5-40"});
db.Beneficiarios.insertOne({"DocumentoBeneficiario":1520654785,
"NombreBeneficiario":"Julian Lopera","TelefonoBeneficiario":3256984587,
"DireccionBeneficiario":"Calle 37 # 7-24"});


//MODIFICAR REGISTRO COLLECCION CLIENTES
use('GymSystem')
db.Clientes.updateOne({"DocumentoCliente":1007510458},{$set:{"NombreCliente":"Alexander Hincapie"}});
db.Clientes.updateOne({"TelefonoCliente":31354974555},{$set:{"TelefonoCliente":3135497455}});
//MODIFICAR REGISTRO COLLECCION BENEFICIARIOS
use('GymSystem')
db.Beneficiarios.updateOne({"DocumentoBeneficiario":1023659874},{$set:{"NombreBeneficiario":"Sebastian Giraldo"}});
db.Beneficiarios.updateOne({"DireccionBeneficiario":"Calle 52 # 5-40"},{$set:{"TelefonoBeneficiario":3105556667}});
//LISTAR TODOS LOS DATOS CLIENTES
use('GymSystem')
db.Clientes.find();
//LISTAR TODOS LOS DATOS BENEFICIARIOS
use('GymSystem')
db.Beneficiarios.find();
//CONSULTAR POR UN ATRIBUTO CLIENTES
use('GymSystem')
db.Clientes.find({"DocumentoCliente":1007510458});
//CONSULTAR POR UN ATRIBUTO CLIENTES
use('GymSystem')
db.Beneficiarios.find({"DocumentoBeneficiario":1023659874});
//ORDENAR POR UN ATRIBUTO CLIENTES
use('GymSystem')
db.Clientes.find().sort({"TelefonoCliente":1});
//ORDENAR POR UN ATRIBUTO BENEFICIARIOS 
use('GymSystem')
db.Beneficiarios.find().sort({"DireccionBeneficiario":1});
//CONSULTAR CANTIDAD DE REGISTROS CLEINTES
use('GymSystem')
db.Clientes.count();
//CONSULTAR CANTIDAD DE REGISTROS BENEFICIARIOS
use('GymSystem')
db.Beneficiarios.count();
//ELIMINAR DOS REGISTROS CLIENTES
use('GymSystem')
db.Clientes.deleteOne({"NombreCliente":"Esteban Rojas"});
db.Clientes.deleteOne({"NombreCliente":"Julian Lopera"});
//ELIMINAR DOS REGISTROS BENEFICIARIOS
use('GymSystem')
db.Beneficiarios.deleteOne({"NombreBeneficiario":"Alexander Ospina"});
db.Beneficiarios.deleteOne({"NombreBeneficiario":"Johany Ocampo"});
