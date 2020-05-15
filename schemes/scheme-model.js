const db = require('../data/dbContext');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({id})
    .first()
}

function findSteps(id) {
  return db.select({id: 'a.id', step: 'a.step_number', instructions: 'a.instructions', scheme: 'schemes.scheme_name'})
    .from({a: 'steps'})
    .join('schemes', 'a.scheme_id', 'schemes.id')
    .where('a.scheme_id', id);
}

function add(scheme) {
  return db('schemes').insert(scheme, 'id')
    .then(result => {
      console.log('add 2', result)
      if (result && result.length>0)
        return findById(result[0]);
    })
    .catch(error => {
      console.log('error:', error)
    })
}

function update(changes, id) {
  return db('schemes').update(changes, 'id').where({id})
    .then(result => {
      if (result && result.length>0)
        return findById(result[0]);
    })
}

function remove(id) {
  return db('steps').where({scheme_id: id}).del()
    .then(result => {
      return db('schemes').where({id}).del()
    })
}
