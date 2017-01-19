var express = require('express');
var router = express.Router();
const Queries = require( './queries.js' )
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({database: 'doitnow'})

const Tasks = {
  getAll: () => {
    return db.any( Queries.allTasks )
  },
  create: ( name ) => {
    return db.oneOrNone ( Queries.createTask, [name] )
  },
  update: ( id, name ) => {
    return db.one ( Queries.updateName [id, name] )
  },
  deleteTask: ( id ) => {
    return db.none ( Queries.deleteTask [id] )
  }
}

module.exports = Tasks
