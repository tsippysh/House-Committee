app.factory("user", function($q) {
     var activeUser = null;
     function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
    }
     function login(email, pwd) {
        var async = $q.defer();
         if (email === "d@gmail.com" && pwd === "1") {
            // success login
            activeUser = new User({id: "1", fname:"Daniela", lname: "Tsadik", 
            email: "d@gmail.com", pwd: "1"});
             async.resolve(activeUser);
        } else {
            async.reject();
        }
         return async.promise;
    }
     function isLoggedIn() {
        return activeUser ? true : false;
    }
    function logout() {
        activeUser = null;
    }

     return {
        login: login,
        isLoggedIn: isLoggedIn
    }
})