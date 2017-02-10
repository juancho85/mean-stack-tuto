var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   content: {type: String, required: true},
   user: {type: Schema.Types.ObjectId, ref: 'User'}
});

//the default collection name will be messages (plural form all lowercase)
module.exports = mongoose.model('Message', schema);
