const mongoose = require('mongoose');

const BD = 'mongodb+srv://eis:123@cluster0-srjn4.mongodb.net/test?retryWrites=true'

mongoose.connect(BD)
    .then(db => console.log('BD is conenected'))
    .catch(err => console.error(err));

module.exports = mongoose;