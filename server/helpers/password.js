const bcrypt = require('bcrypt')
const roundSalt = 10

class Password {

    static hashPassword(pass) {
        const salt = bcrypt.genSaltSync(roundSalt)
        return bcrypt.hashSync(pass, salt)
    }

    static checkPassword(loginPass, hashPass) {
        return bcrypt.compareSync(loginPass, hashPass)
    }

}

module.exports = Password