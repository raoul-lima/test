const models = require('../models');

module.exports = {
    create : (req, res) => {

        //parametres

        var libelle = req.body.libelle;

        const newactivite = {
            idUser: 1,
            libelle: libelle,
            isFinished: 0,
            isEncours: 0,
            isOpen: 1
        };
        models.Activite.create(newactivite)
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

    getall: (req, res) => {
        models.Activite.findAll()
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
    getone: (req, res) => {
        const id = req.params.id;
        models.Activite.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Des erreurs apparaissent pendant la recuperation de activités"+ id
          });
        });
    },

    update: (req, res) => {
        const id = req.params.id;

        models.Activite.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Activités was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update activites with id=${id}. Maybe activites was not found or req.body is empty!`
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

        models.Activite.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Activités was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete activites with id=${id}. Maybe activites was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete activites with id=" + id
            });
          });
    }
}