'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('orders', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    products_ids: {
      type: 'string',
      // foreignKey: {
      //   name: 'order_products_ids',
      //   table: 'products',
      //   rules: {
      //     onDelete: 'CASCADE',
      //     onUpdate: 'CASCADE'
      //   },
      //   mapping: {
      //     products_ids: 'id'
      //   }
      // },
    },
    qty: { type: 'int' },
    user_id: {
      type: 'int',
      // foreignKey: {
      //   name: 'order_user_id',
      //   table: 'users',
      //   rules: {
      //     onDelete: 'CASCADE',
      //     onUpdate: 'CASCADE'
      //   },
      //   mapping: {
      //     user_id: 'id'
      //   }
      // }
    },
    order_status: { type: 'string' },
  })
};

exports.down = function(db) {
  return db.dropTable('orders');
};

exports._meta = {
  "version": 1
};
