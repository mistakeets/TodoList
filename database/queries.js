const pgp = require( 'pg-promise' )()
const db = pgp({ database: 'doitnow' })

const allTasks = 'SELECT * from todos'
const createTask = 'INSERT INTO todos (id, name) VALUES ($1, $2) RETURNING *'
const updateName = 'UPDATE todos SET name=$1 WHERE ID=$2 RETURNING *'
const deleteTask = 'DELETE from todos WHERE id =$1'
