// const sequelize = require('../db')
// const {DataTypes} = require('sequelize')
const {Schema, model} = require('mongoose')

const User = new Schema({
    email:{type: String, unique: true},
    password:{type: String},
    role:{type: String, default: "USER"},
})

const Device = new Schema({
    name:{type: String, unique: true, allowNull: false},
    price:{type: String, allowNull: false},
    img:{type: String, allowNull: false},
    info: [{type: String, ref: 'DeviceInfo'}]
})

const Type = new Schema({
    name: {type: String, unique: true, allowNull: false},
    devices: [{type: String, ref: 'Device'}]
})

const Brand = new Schema({
    name: {type: String, unique: true, allowNull: false},
    devices: [{type: String, ref: 'Device'}]
})

const DeviceInfo = new Schema({
    title: {type: String, allowNull: false},
    description: {type: String, allowNull: false},
})

// const TypeBrand = new Schema({
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
//     info: [{type: String, ref: 'DeviceInfo'}]
// })


// Type.hasMany(Device)
// Device.belongsTo(Type)

// Brand.hasMany(Device)
// Device.belongsTo(Brand)


// Device.hasMany(DeviceInfo, {as: 'info'});
// DeviceInfo.belongsTo(Device)

// Type.belongsToMany(Brand, {through: TypeBrand })
// Brand.belongsToMany(Type, {through: TypeBrand })

module.exports = {
    User,
    Device,
    Type,
    Brand,
    DeviceInfo,
    // TypeBrand
}
