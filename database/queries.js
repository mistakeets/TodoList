const pgp = require( 'pg-promise' )()
const db = pgp({ database: 'doitnow' })

const allTasks = 'SELECT * from todos'
const createTask = 'INSERT INTO todos (id, name) VALUES ($1, $2) RETURNING *'


const Tasks = {
  getAll: () => {
    return db.any( allTasks )
  },
  create: (id, name) => {
    return db.one ( createTask, [id, name] )
  },
}
