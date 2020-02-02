//* This is the user object **/

class User{

    constructor(username, password, isLoggedIn){
        this.username = username;
        this.password = password;
        this.loginStatus = isLoggedIn;
    }

    setUsername(username){
        this.username = username;
    }

    setPassword(password){
        this.password = password;
    }

    setLoginStatus(status){
        this.loginStatus = status;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getLoginStatus(){
        return this.loginStatus
    }

}