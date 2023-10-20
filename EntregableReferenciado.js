// / /EJEMPLO EMBEBER/
use ('mongo_2670689');
db.createCollection("Facturacion");
db.Facturacion.insertOne({
    "numero_factura":7,
    "fecha":"20-10-2023 0:20:20",
    "cajero":{
        "documento":1111,
        "nombres": "Angela Perez",
    },
    "detalleFactura":[
    {
        "codigo_producto":11,
        "nombre_producto":"Agua",
        "valor_unitario":2000,
        "cantidad":3
    },
    {
        "codigo_producto":12,
        "nombre_producto":"Aceite",
        "valor_unitario":7000,
        "cantidad":2
    },
    {
        "codigo_producto":22,
        "nombre_producto":"Azucar",
        "valor_unitario":5000,
        "cantidad":4
    },
    ],
    "estado":true
}
);

use ('mongo_2670689');
db.Facturacion.find();
db.Facturacion.find({"detalleFactura.codigo_producto":22})

// /EJEMPLO REFERENCIADO/
use ('mongo_2670689');
db.Cliente.insertOne({
    "documento":1313,
    "nombres":"Tomasa Candela"
});

use ('mongo_2670689');
db.DetalleFactura.insertOne({"detalleFactura":[
    {
        "codigo_producto":11,
        "nombre_producto":"Agua",
        "valor_unitario":2000,
        "cantidad":3
    },
    {
        "codigo_producto":12,
        "nombre_producto":"Aceite",
        "valor_unitario":7000,
        "cantidad":2
    },
    {
        "codigo_producto":22,
        "nombre_producto":"Azucar",
        "valor_unitario":5000,
        "cantidad":4
    },
    ]});


use ('mongo_2670689');
db.Facturacion2.insertOne({
    fecha:"20-10-2023",
    "cliente":{
        "$ref" : "Cliente",
        "$id" : ObjectId("65329460dd1b7b32ac0ca2f6"),
        "$db" : "mongo_2670689",
    },
    "detalleFctura":{
        "$ref" : "DetalleFactura",
        "$id" : ObjectId("6532a581181c1e63229144b7"),
        "$db" : "mongo_2670689",
    },
    "estado":true
});