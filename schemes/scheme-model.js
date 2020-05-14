const db = require('../data/dbContext');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

const schemes = db('schemes');

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

}

function update(changes, id) {

}

function remove(id) {

}
