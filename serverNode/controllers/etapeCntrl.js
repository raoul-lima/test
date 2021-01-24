const models = require('../models');

module.exports= {
   /* create: (req, res) => {
        let etapes = {};
    
        try{
            etapes.idTache = 4;
            etapes.title = req.body.title;
            etapes.description = req.body.description;
        
            // Save to MySQL database
            models.Etape.create(etapes).then(result => {    
                // send uploading message to client
                res.status(200).json({
                    message: "Upload Successfully a taches with id = " + result.id,
                    etapes: result,
                });
            });
        }catch(error){
            res.status(500).json({
                message: "Fail!",
                error: error.message
            });
        }
    }, */
        create1 : (req, res) => {
    
            //parametres
    
            var title = req.body.title;
            var descrips = req.body.description;
    
            const newEtape = {
                idTache: 4,
                title: title,
                descriptions: descrips,
                isEncours: 0,
                isOpen: 1
            };
            models.Etape.create(newEtape)
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

    getall: (req, res) =>{
        
    },

    getone: (req, res) =>{
        
    },

    update: (req, res) =>{
        
    },

    delete: (req, res) =>{

    }
}
