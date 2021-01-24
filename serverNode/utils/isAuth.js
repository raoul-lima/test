
/*
export const isAuth = async(req, res, next) => {
    if(!req.query.apiKey){
        return res.status(401).json({
            'message':'Vous devriez vous authentifier avec un apiKey pour y acceder'
        });
    }else{
        const{apiKey}=req.query;
        if(apiKey ==='vs@dgs457KKD##*vdd*FRss0erfre5cccp@'){
            return next();
        }else{
            return res.status(401).json({
                'errorMessage':'apiKey invalid'
            })
        }
    }
}
*/
module.exports = {
   isAuth: async(req, res, next) => {
       if(!req.query.apiKey){
           return res.status(401).json({
               'erreur':'Vous devriez vous authentifier avec un apiKey pour y acceder'
           })
       }else{
        const {apiKey} = req.query;
        if(apiKey === 'vs@dgs457KKD#*vd*FRss0cp@'){
            return next();
        }else{
            return res.status(401).json({
                'erreur':'Votre Apikey n\'est pas valid'
            })
        }
       }
   }
    
    }