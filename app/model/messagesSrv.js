app.factory("messages", function($q, $http, user) {
     var messages = [];
     function Message(plainMessage) {
        this.id = plainMessage.id;
        this.name = plainMessage.name;
        this.description = plainMessage.description;
        this.userId = plainMessage.userId;
    }
     function getActiveUserMessages() {
        var async = $q.defer();
         messages = [];
         debugger;
        var getMessageURL = "http://my-json-server.typicode.com/tsippysh/House-Committee/messages?id=" +
            user.getActiveUser().id;

        
        $http.get(getMessageURL).then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                var message = new Message(response.data[i]);
                   
                
                
                
                alert("messages:  daniela");
                messages.push(message);
            }            
            async.resolve(messages);
        }, function(error) {
            async.reject(error);
        })
         return async.promise;
    }

    function createMessage(name, description, ) {
        var async = $q.defer();
         var newMessage = new Message({id:-1, name: name, description: description,            
            userId: user.getActiveUser().id});
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