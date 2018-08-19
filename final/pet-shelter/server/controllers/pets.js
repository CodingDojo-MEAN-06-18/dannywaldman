const Pet = require('mongoose').model('Pet');
const PetType = require('mongoose').model('PetType');

module.exports = {
    List(request, response) {
        Pet.find()
        .populate('type')        
        .then(bikes => response.json(bikes))
        .catch(error => {
            response.status(500).json(error);
          });
    },
    New(request, response) {
        request.body._id = new require('mongoose').Schema.Types.ObjectId();
        Pet.create(request.body)
        .then(bike => response.json(bike))
        .catch(error => {
            const errors = Object.keys(error.errors).map(
              key => error.errors[key].message
            );
    
            response.status(500).json(errors);
          });
    },
    Get(request, response) {
        Pet.findOne({ _id: request.params.id})
        .populate('type')    
        .then(pet => response.json(pet))        
        .catch(error => {
            response.status(500).json(error);
          });
    },
    Edit(request, response) {
        Pet.findByIdAndUpdate({ _id: request.body._id}, request.body, { new: true })
        .populate('type')
        .then(pet => response.json(pet))
        .catch(error => {
            const errors = Object.keys(error.errors).map(
              key => error.errors[key].message
            );
    
            response.status(500).json(errors);
          });
    },
    Like(request, response) {
        Pet.findById({ _id: request.params.id})
        .populate('type')
        .then(pet => {
            pet.likes++;
            pet.save();
            response.json(pet);
        })
        .catch(error => {
            response.status(500).json(error);
          });
    },
    Destroy(request, response) {
        Pet.deleteOne({ _id: request.params.id})
        .then(pet => response.json(pet))
        .catch(error => response.json(error))
    },
    PetTypes(request, response) {
        PetType.find({})
            .then(types => response.json(types))
            .catch(error => response.json(error))
    }
};