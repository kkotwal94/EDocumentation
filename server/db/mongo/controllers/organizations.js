import _ from 'lodash';
import Organization from '../models/organization';

export function all(req, res) {
    Organization.find({}).exec((err, organizations) => {
      if (err) {
              console.log('Error in first query');
              return res.status(500).send('Something went wrong getting the data');
          }
          return res.json(organizations);
      });
}

export function add(req, res) {
    Organization.create(req.body, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }

        return res.status(200).send('OK');
    });
}

export function update(req, res) {
    const query = {
        id: req.params.id
    };
    const omitKeys = ['id', '_id', '_v'];
    const data = _.omit(req.body, omitKeys);
    Organization.findOneAndUpdate(query, data, (err) => {
        if (err) {
            console.log('Error on save!');
            return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
    });
}

export function remove(req, res) {
    const query = {
        id: req.params.id
    };
    Organization.findOneAndRemove(query, (err) => {
        if (err) {
            console.log('Error on delete');
            return res.status(500).send('We failed to delete for some reason');
        }

        return res.status(200).send('Removed Successfully');
    });
}


export default {
    all,
    add,
    update,
    remove
};
