use('constru-tech')



db.createCollection('Usuarios',{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "User Object Validation",
            required: ["id","nombre","apellido","cedula","password","email"],
            properties: {
                id:{
                    bsonType:"int",
                    minimum:1,
                    maximum:10000,
                    description:"'id'identificacion"
                },
                name: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'nombre' debe ser tipo string y es requerido"
                },
                apellido: {
                    bsonType: "string",
                    minimum: 3,
                    maximum: 30,
                    description: "'apellido' debe ser tipo string y es requerido"
                },
                cedula: {
                    bsonType: "string",
                    minimum: 8,
                    maximum: 15,
                    description: "la cedula es requerida"
                },
                password: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 15,
                    description: "la contraseña es requerida para poder iniciar sesion"
                },
                email: {
                    bsonType: "string",
                    minimum: 10,
                    maximum: 50,
                    description: "se requiere un correo para poder recuperar la password"
                }
            }
        }
    }
})

