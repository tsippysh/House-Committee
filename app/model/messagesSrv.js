app.factory("messages", function ($q, $http, user) {
    var messages = [];
    var wasEverLoaded = false;

    function Message(plainMessage,fname,lname) {
        this.id = plainMessage.id;
        this.name = plainMessage.name;
        this.description = plainMessage.description;
        this.userId = plainMessage.userId;
        this.fname = fname;
        this.lname = lname;
    }

    function getActiveUserMessages(isMessage) {
        var async = $q.defer();


        // messages = [];
        var substring = "";
        var usersIds =[];
        var users=[];
        // case of vaad:
        if (user.getActiveUser().email === "vaad@mail.com") {
            substring = "";
        }
        else {
            if(isMessage){
            substring += "?id=" + user.getActiveUser().id;
            }
        }








        var getMessageURL = "http://my-json-server.typicode.com/tsippysh/House-Committee/messages" + substring;

        $http.get(getMessageURL).then(function (response) {
            var flag = (user.getActiveUser().email === "vaad@mail.com");
            user.getUsers().then(function(response2){
                 users =response2.data;
                 usersIds = response2.data.map(row => row.id);
                 for (var i = 0; i < response.data.length; i++) {
                    if (flag) {
                        var index = usersIds.indexOf(response.data[i].userId);
                        if(index!=-1) {
                            // debugger;
                            var message = new Message(response.data[i],users[index].fname,users[index].lname);
                            messages.push(message);
                        } else {
                            var message = new Message(response.data[i]);
                            messages.push(message);
                        }
                    } else {
                        var message = new Message(response.data[i]);
                        messages.push(message);
                    }
                   
                    
                }
                async.resolve(messages);
            })
            
           
        }, function (error) {
            async.reject(error);
        })
        return async.promise;
    }

    function createMessage(name, description) {
        var async = $q.defer();
        var newMessage = new Message({
            id: -1, name: name, description: description,
            userId: user.getActiveUser().id
        });
        // if working with real server:
        //$http.post("http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes", newRecipe).then.....
       
        messages.push(newMessage);
        async.resolve(newMessage);
        return async.promise;
    }

    return {
        getActiveUserMessages: getActiveUserMessages,
        createMessage: createMessage
    }
}) 