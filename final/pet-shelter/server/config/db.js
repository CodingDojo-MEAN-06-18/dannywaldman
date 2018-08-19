const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.join(__dirname, '../models');
const seeder = require('mongoose-seed');
const dbUrl = 'mongodb://localhost:27017/pets';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => console.log('connected to Mongodb'));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});

mongoose.model('PetType').find({}).then(types => {
    if (types.length === 0) {
        seeder.connect(dbUrl, () => {
            seeder.populateModels([{
                'model': 'PetType',
                'documents': [{
                        'name': 'Dog'
                    },
                    {
                        'name': 'Cat'
                    },
                    {
                        'name': 'Fish'
                    },
                    {
                        'name': 'Bird'
                    },
                    {
                        'name': 'Mouse'
                    },
                    {
                        'name': 'Turtle'
                    }
                ]
            }], () => {
                seeder.disconnect();
            });

        });
    }
});
