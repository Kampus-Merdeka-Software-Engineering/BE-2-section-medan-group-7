const {DataTypes} = require('sequelize')
const sequelize = require('../config/db-config')

const booking = sequelize.define('booking', {
    id_booking: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_number:{
        type: DataTypes.STRING,
        allowNull: false
    },
    where_to:{
        type: DataTypes.STRING,
    },
    how_many:{
        type: DataTypes.STRING,
    },
    arrivals:{
        type: DataTypes.STRING,
    },
    leaving:{
        type: DataTypes.STRING,
    }
}, {
    tableName:'booking'
})

module.exports=booking