const queries = {
  allTasks: 'SELECT * from todos ORDER by id',

  createTask: 'INSERT INTO todos (name) VALUES ($1) RETURNING id',

  updateName: 'UPDATE todos SET name=$1 WHERE ID=$2 RETURNING *',

  deleteTask: 'DELETE from todos WHERE id =$1'
}

module.exports = queries;
