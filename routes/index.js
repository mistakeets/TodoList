var express = require('express');
var router = express.Router();
const Tasks = require('../database/tasks.js')
const Queries = require( '../database/queries.js' )
const pgPromise = require('pg-promise')

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//CREATE A TASK
router.post('/createTask', (req,res)=> {
  Tasks.create(req.body.task).then( () => {
   res.redirect('/')
  });
});

// //GET ALL
// router.get('/', (req,res)=> {
//   Tasks.getAll(req.body.task).then( () => response.render('index', {task:allTasks}))
// });

module.exports = router;
