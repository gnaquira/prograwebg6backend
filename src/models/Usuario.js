import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Universidad } from "./universidad.js";
import { Carrera } from "./carrera.js";

export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreUsuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipoDocumento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nroDocumento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tituloPerfil: {
            type: DataTypes.STRING
        },
        presenPerfil: {
            type: DataTypes.STRING
        },
        imgPerfil: {
            type: DataTypes.STRING
        }

    }, {
        freezeTableName: true
    }
)
Usuario.belongsTo(Universidad, {
    foreignKey: "universidadId",
    targetKey: "id"
})

Universidad.hasMany(Usuario, {
    foreignKey: "universidadId",
    sourceKey: "id"
})

Usuario.belongsTo(Carrera, {
    foreignKey: "carreraId",
    targetKey: "id"
})

Carrera.hasMany(Usuario, {
    foreignKey: "carreraId",
    sourceKey: "id"
})

