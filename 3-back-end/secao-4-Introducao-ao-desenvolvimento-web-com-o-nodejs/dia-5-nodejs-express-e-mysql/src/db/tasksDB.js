const conn = require('./connection');

const insert = (task) => conn.execute(
  'INSERT INTO tasks (nome, descricao) VALUES (?, ?)',
  [task.nome, task.descricao],
);

const update = (task, id) => conn.execute(
  'UPDATE tasks SET nome = ?, descricao = ? WHERE id = ?',
  [task.nome, task.descricao, id],
);

const remove = (id) => conn.execute(
  'DELETE FROM tasks WHERE id = ?',
  [id],
);

const findAll = () => conn.execute(
  'SELECT * FROM tasks',
);

const findById = (id) => conn.execute(
  'SELECT * FROM tasks WHERE id = ?',
  [id],
);

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById,
};