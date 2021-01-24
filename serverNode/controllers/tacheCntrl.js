const models = require('../models');

module.exports = {

    getall: (req, res) => {
        models.Todo.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Des erreurs apparaissent pendant la recuperation des données."
          });
        });
    },

    create : (req, res) => {

        //parametres
        var libelle = req.body.libelle;
        var descrips = req.body.description;

        const newTache = {
            idUser: 1,
            idActivite: 1,
            label: libelle,
            description: descrips,
            isStarted:0,
            isFinished: 0,
        };
        models.Todo.create(newTache)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating it."
          });
        });
    
    },

    getone: (req, res) => {
        const id = req.params.id;
        models.Todo.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Des erreurs apparaissent pendant la recuperation des taches"+ id
          });
        });
    },

    update: (req, res) => {
        const id = req.params.id;

        models.Todo.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Données was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update taches with id=${id}. Maybe taches was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating activites with id=" + id
            });
          });
    },

    delete: (req, res)=> {
        const id = req.params.id;

        models.Todo.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Taches was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete taches with id=${id}. Maybe taches was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not taches activites with id=" + id
            });
          });
    }
}