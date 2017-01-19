const Queries = {
  allTasks: 'SELECT * from todos',

  createTask: 'INSERT INTO todos (name) VALUES ($1) RETURNING *',

  updateName: 'UPDATE todos SET name=$1 WHERE ID=$2 RETURNING *',

  deleteTask: 'DELETE from todos WHERE id =$1'
}

module.exports = Queries;
