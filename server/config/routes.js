const pets = require('../controllers/controllers');

module.exports = (app) => {

    app.get("/pets",pets.getAll)
    app.get("/pets/:id", pets.getOne)
    app.post("/pets", pets.create)
    app.put("/pets/:id", pets.update)
    app.delete("/pets/:id", pets.delete)
    

};