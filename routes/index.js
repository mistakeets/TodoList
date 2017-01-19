var express = require('express');
var router = express.Router();
const Tasks = require('../database/tasks.js')
const Queries = require( '../database/queries.js' )
const pgPromise = require('pg-promise')

// /* GET home page. */
router.get('/', function( req, res ) {
  Tasks.getAll().then(Tasks => {
    res.render('index', {
      Title: 'To Do List',
      Tasks: Tasks
    }).catch(error => next(error))
  })
  //res.render('index', { title: 'Do it NOW!' });
});


//CREATE A TASK
router.post('/createTask', (req,res)=> {
  Tasks.create(req.body.task).then( () => {
   res.redirect('/')
  });
});

//GET ALL
// router.get('/', (req,res)=> {
//   Tasks.getAll(req.body.task).then( () => response.render('index', {task:allTasks}))
// });

module.exports = router;
