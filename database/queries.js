const pgp = require( 'pg-promise' )()
const db = pgp({ database: 'doitnow' })

const allTasks = 'SELECT * from todos'
const createTask = 'INSERT INTO todos (id, name) VALUES ($1, $2) RETURNING *'
const updateName = 'UPDATE todos SET name=$1 WHERE ID=$2 RETURNING *'
const deleteTask = 'DELETE from todos WHERE id =$1'


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
