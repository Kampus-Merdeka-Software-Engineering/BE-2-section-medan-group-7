const {DataTypes} = require('sequelize')
const sequelize = require('../config/db-config')

const destination = sequelize.define('destination', {
    id_destination: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
    }
}, {
    tableName:'destination'
})

module.exports=destination