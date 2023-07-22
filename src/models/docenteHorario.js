import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Docente } from "./docente.js";
import { Horario } from "./horario.js";

export const DocenteHorario = sequelize.define(
    "DocenteHorario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        freezeTableName: true
    }
)

DocenteHorario .hasMany(Docente, {
    foreignKey: "docenteId",
    sourceKey: "id"
})

Docente .belongsTo(DocenteHorario, {
    foreignKey: "docenteId",
    targetKey: "id"
})

DocenteHorario .hasMany(Horario, {
    foreignKey: "horarioId",
    sourceKey: "id"
})

Horario .belongsTo(DocenteHorario, {
    foreignKey: "horarioId",
    targetKey: "id"
})
