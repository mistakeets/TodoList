const {allTasks, createTask, updateName, deleteTask} = require( './queries.js' )

const Tasks = {
  getAll: () => {
    return db.any( allTasks )
  },
  create: ( id, name ) => {
    return db.one ( createTask, [id, name] )
  },
  update: ( id, name ) => {
    return db.one ( updateName [id, name] )
  },
  deleteTask: ( id ) => {
    return db.none ( deleteTask [id] )
  }
}

module.exports = Tasks
