module.exports = (sequelize, DataTypes) =>{
    const fotografias = sequelize.define('fotografias', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey:true
        },
        fotografia:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        imagen:DataTypes.STRING,
        activo :DataTypes.BOOLEAN,
        numero:DataTypes.INTEGER,
        autor:DataTypes.STRING,
        usuario_creacion:DataTypes.STRING,
    })

    return fotografias;  
}