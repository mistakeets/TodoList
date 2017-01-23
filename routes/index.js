var express = require('express');
var router = express.Router();
const tasks = require('../database/tasks.js')
const queries = require('../database/queries.js')
const pgPromise = require('pg-promise')

//GET ALL
router.get('/', function( req, res ) {
  tasks.getAll().then(tasks => {
    res.render('index', {
      title: 'To Do List',
      tasks: tasks
    })
  })
  .catch(error => res.json(error))
})

//CREATE A TASK
router.post('/createTask', ( req, res )=> {
  tasks.create( req.body.task ).then( () => {
    res.redirect('/')
  })
  .catch(error => res.json(error))
})

//DELETE A TASK
router.post('/deleteTask/:id', ( req, res )=> {
  tasks.deleteTask( req.params.id ).then( () => {
    res.redirect('/')
  })
  .catch(error => res.json(error))
})


//UPDATE TASK name
router.get('/updateTask/:id', ( req,res )=> {
const { id } = req.params

Promise.all('SELECT * from todos WHERE id=$1').then(data=> {
  res.redirect('/')
})

})
router.post('/updateTask/:id', ( req, res )=> {
  console.log('BODY', req.body)
  tasks.update(req.body.name, req.params.id ).then( () => {
    res.redirect('/')
  })
    .catch(error => res.json(error))
})

module.exports = router;
