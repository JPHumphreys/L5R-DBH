//* This is the user object **/

class User{

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    setUsername(username){
        this.username = username;
    }

    setPassword(password){
        this.password = password;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

}