var express = require('express');
var router = express.Router();
const queries = require('./queries.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({database: 'doitnow'})

const tasks = {
  getAll: () => db.any( queries.allTasks ),
  create: ( name ) =>  db.oneOrNone ( queries.createTask, [name] ),
  update: ( id, name ) =>  db.one ( queries.updateName [id, name] ),
  deleteTask: ( id ) => db.none ( queries.deleteTask, [id] )
}

module.exports = tasks;
