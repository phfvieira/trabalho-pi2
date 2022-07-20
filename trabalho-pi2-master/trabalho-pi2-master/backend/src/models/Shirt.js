import Sequelize, { Model } from 'sequelize';

class Shirt extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      team: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      composition: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkimg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${process.env.APP_HOST}/file/${this.linkimg}`;
        },
      },
    }, {
      sequelize,
      tableName: 'shirts',
      timestamps: false,
    });

    return this;
  }
}

export default Shirt;
