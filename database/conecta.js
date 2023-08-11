import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('estoque', 'aluno', 'senacrs', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

