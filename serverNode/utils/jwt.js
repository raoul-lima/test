const jwt = require('jsonwebtoken');

const JWT_SECRET = '0NKjffdd11231daccvb444mplo0ç54744dexw00vbcLKIodPQsdD214'

module.exports = {
generateTokenForUser: (userData) =>{
    return jwt.sign({
        userId: userData.id,
        isAdmin: userData.isAdmin,
        isResp: userData.isResp
    },
    JWT_SECRET,
    {
        expiresIn: '1h'
    })
}

}