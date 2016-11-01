var mongoose = require('mongoose');
var Planet = require('./planet.model');

module.exports = function() {

    var list = function(req, res) {
        Planet.find().exec()
            .then(function(data) {
                res.json(data);
            });
    };

    var detail = function(req, res) {
        var id = req.params.id;
        Planet.findById(id)
            .exec()
            .then(function(data) {
                res.status(200).send(data);
            },function(data) {
                res.status(404).send({'error':'Eroe non trovato nel database'});
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };


    return {
        list: list,
        detail: detail
    }
};
