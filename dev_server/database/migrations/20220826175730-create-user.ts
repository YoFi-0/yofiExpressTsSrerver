'use strict';

module.exports = {
  // @ts-ignore
  async up(queryInterface, Sequelize) {
    // update database with out lossing data
  },
  // @ts-ignore
  async down(queryInterface, Sequelize) {
    // update database with out lossing data
  }
};

// like this

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       firstName: {
//         type: Sequelize.STRING
//       },
//       lastName: {
//         type: Sequelize.STRING
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Users');
//   }
// };


