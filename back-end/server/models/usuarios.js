module.exports = (sequelize, DataTypes) =>{
    const usuarios = sequelize.define('usuarios', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey:true
        },
        usuario:DataTypes.STRING,
        password:DataTypes.STRING,
        id_rol:DataTypes.INTEGER,
        activo :DataTypes.BOOLEAN,
        usuario_creacion:DataTypes.STRING,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    })

    return usuarios;  
}