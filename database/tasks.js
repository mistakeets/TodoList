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

modules.exports = Tasks
