const bcrypt = require('bcrypt')
const saltRound = 10

class Password {

    static hashPassword(pass) {
        let salt = bcrypt.genSaltSync(saltRound)
        console.log(bcrypt.hashSync(pass, salt), '=======> helper')
        return bcrypt.hashSync(pass, salt)
    }

    static checkPassword(loginPass, hashPass) {
        console.log(bcrypt.compareSync(loginPass, hashPass), '=======> helper')
        return bcrypt.compareSync(loginPass, hashPass)
    }

}

module.exports = Password