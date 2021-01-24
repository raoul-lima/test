const express = require('express');
const usersCntrl = require('./controllers/usersCntrl');
const actCntrl = require('./controllers/activCntrl');
const tacheCntrl = require('./controllers/tacheCntrl');
const etapeCntrl = require('./controllers/etapeCntrl');

//router
exports.router = (()=>{
    var apiRouter = express.Router();
 
    //users routes users
    apiRouter.route('/users/register/').post(usersCntrl.register);
    apiRouter.route('/users/getall/').get(usersCntrl.findAll);
    apiRouter.route('/users/getone/:id').get(usersCntrl.findOne);
    apiRouter.route('/users/login/').post(usersCntrl.login);
    apiRouter.route('/users/supp/:id').delete(usersCntrl.delete);

    //activités routes actuvités
    apiRouter.route('/activites/create/').post(actCntrl.create);
    apiRouter.route('/activites/getall/').get(actCntrl.getall);
    apiRouter.route('/activites/getone/:id').get(actCntrl.getone);
    apiRouter.route('/activites/update/:id').put(actCntrl.update);
    apiRouter.route('/activites/supp/:id').delete(actCntrl.delete);

    //todo routes taches
    apiRouter.route('/taches/create/').post(tacheCntrl.create);
    apiRouter.route('/taches/getall/').get(tacheCntrl.getall);
    apiRouter.route('/taches/getone/:id').get(tacheCntrl.getone);
    apiRouter.route('/taches/update/:id').put(tacheCntrl.update);
    apiRouter.route('/taches/supp/:id').delete(tacheCntrl.delete);

    //etapes routes etapes
    apiRouter.route('/etapes/create/').post(etapeCntrl.create1);
    apiRouter.route('/etapes/getall/').get(etapeCntrl.getall);
    apiRouter.route('/etapes/getone/:id').get(etapeCntrl.getone);
    apiRouter.route('/etapes/update/:id').put(etapeCntrl.update);
    apiRouter.route('/etapes/supp/:id').delete(etapeCntrl.delete);

    return apiRouter;
})();