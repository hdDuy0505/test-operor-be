'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('meetings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      room_id: {
        type: Sequelize.INTEGER,
      },
      start_day: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      end_day: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
      },
    });

    // meetings constraint
    await queryInterface.addConstraint('meetings', {
      type: 'foreign key',
      name: 'fk_meetings_users',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('meetings');
  }
};
