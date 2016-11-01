var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planetSchema = new Schema({
	name: String,
	img: String
	// planet: []
}, { collection: 'Planet' });

var Planet = mongoose.model('Planet',planetSchema);
module.exports = Planet;
