const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');
const { generateTokenForUser } = require('../utils/jwt');
const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const pass_regex = /^(?=.*\d).{4,8}$/

module.exports = {
    register: (req, res) => {

        //les Params
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        if (username == null || email == null || password == null){
            return res.status(400).json({'error': 'missing parametres'});
        }

        if (username.length >= 13 || username.legnth <= 3){
            return res.status(404).json({'error':'La longueur devrait etre compris entre 4-12'});
        }
        if(!email_regex.test(email)){
            return res.status(404).json({'error': 'email non valid'});
        }
        if(!pass_regex.test(password)){
            return res.status(400).json({'error':' Le password devrait etre compris entre 4 et 8 caractère'});
        }
        //verifie l'username, password etc.
        models.User.findOne({
            attributes: ['username'],
            where: { username : username }
        }).then(function(userFound){
            if(!userFound){
                bcrypt.hash(password, 5, function( err, bcryptedPassword){
                    var newUser = models.User.create({
                        username: username,
                        password: bcryptedPassword,
                        email: email,
                        isAdmin: 1,
                        isResp: 0
                    }).then(function(newUser){
                        return res.status(201).json({
                        'userId': newUser.id
                    })
                }).catch(function(err) {
                    return res.status(500).json({'error': 'cannot add user'})
                });
            });

            } else {
                return res.status(409).json({'error': 'user already exist'});
            }
        }).catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'});
        });


    },
    login:(req, res) =>{
        var username = req.body.username;
        var password = req.body.password;

        if (username == null || password == null){
            return res.status(400).json({'error': 'missing parametres'});
        }
        models.User.findOne({
            where: { username : username }
        }).then((UserFound) =>{
            if(UserFound){
                bcrypt.compare(password, UserFound.password, (errBcrypt, resBcrypt)=>{
                    if(resBcrypt){
                        return res.status(201).json({
                            'username': UserFound.id,
                            'token': generateTokenForUser(UserFound)
                        })
                    }else{
                        return res.status(401).json({'error': 'Votre password n\'est pas valid'});
                    }
                });
            }else{
                return res.status(400).json({'error': 'L\'utilisateur n\'est pas encore dans notre Base de Données'});
            }
        }).catch((error) =>{
            return res.status(404).json({'error': 'Impossible de trouver l\'utilisateur'});
        })
    },

    findOne: (req, res) => {
            const id = req.params.id;
            models.User.findByPk(id)
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message: "Erreur pendant la récuperation de user =" + id
                });
              });
          },

    findAll: (req, res) => {
            models.User.findAll()
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Des Erreurs pendant la recuprération des données."
                });
              });
          },
    delete: (req, res) =>{
        
    }
    
}