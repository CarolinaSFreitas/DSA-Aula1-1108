import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';

export const Produto = sequelize.define('produto', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING(60),
    allowNull: false
    // allowNull defaults to true
  },
  marca: {
    type: DataTypes.STRING(20),
    allowNull: false
    // allowNull defaults to true
  },
  quant: {
    type: DataTypes.INTEGER(4),
    allowNull: false
    // allowNull defaults to true
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
