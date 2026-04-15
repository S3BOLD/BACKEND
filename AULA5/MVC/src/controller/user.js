const UserModel = require("../model/user")

class User {
    constructor() {    
    }

    getAll(){
        return UserModel.getAll();
    }

    getById(id){
        return UserModel.getById(id);
    }

    create(email,password, name){
        if(password.length < 6) {
            throw new Error('Senha deve conter no mínimo 6 caracteres');
        }
        return UserModel.create(email,password, name);

    }

    update(id, email, password, name) {
        if(password && password.length < 6) {
    }
        return UserModel.update(id, email, password, name);
    }

    delete(id) {
        return UserModel.delete(id);
    }

}
module.exports = UserController();