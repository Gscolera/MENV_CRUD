const router = require('express').Router();
const { Client } = require('../models');

router.route('/')
  .get(get)
  .post(create)
  .put(update)
  .delete(del)

router.get('/filter', getFilter);
  
function getFilter(req, res) {
  let filter = req.query;

  for (i in filter) {
    filter[i] = new RegExp(filter[i], 'i')
  };
  
  Client.find(filter).populate('providers').exec((err, clients) => {
    err ? res.status(500).json(err) : res.status(200).json(clients);
  })
}

function get(req, res) {

  if (req.query.name)
    return getOne({ name: req.query.name }, res);

  if (req.query.email)
    return getOne({ email: req.query.email }, res);

  if (req.query.phone)
    return getOne({ phone: req.query.phone }, res);

  Client.find().populate('providers').exec((err, clients) => {
    err ? res.status(500).json(err) : res.status(200).json(clients);
  })
}

function create(req, res) {
  let client = new Client({ ...req.body });
 
  if (err = client.validateSync())
    return res.status(422).json(err);

  client.save()
    .then(() => client.populate('providers', 'name').execPopulate())
    .then(client => res.status(201).json(client))
    .catch(err => res.status(500).json(err))
}
function update(req, res) {
  if (!req.query.id)
    return res.status(400).json({ error: 'No client id in query' });

  Client.findByIdAndUpdate(req.query.id, { ...req.body }, {new: true, runValidators: true })
    .populate('providers')
    .exec((err, data) => {
      err ? res.status(500).json(err) : res.status(200).json(data)
    })
}

function del(req, res) {
  if (!req.query.id)
    return res.status(400).json({ error: 'No client id in query' });

  Client.deleteOne({ _id: req.query.id }).exec(err => {
    err ? res.status(500).json(err) : res.sendStatus(200)
  });
}

function getOne(query, res) {
  Client.findOne(query).exec((err, client) => {
    err ? res.status(500).json(err) : res.status(200).json(client)
  })
}

module.exports = router;


