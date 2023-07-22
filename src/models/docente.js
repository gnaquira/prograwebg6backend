//{id: 2, name: "Sandra", lastname: "Burga"}

import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import { Usuario } from "./Usuario.js";

const Docente = sequelize.define('docentes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    }
})

export default Docente
Docente .hasMany(Usuario, {
    foreignKey: "usuarioId",
    sourceKey: "id"
})

Usuario .belongsTo(Profesor, {
    foreignKey: "usuarioId",
    targetKey: "id"
})