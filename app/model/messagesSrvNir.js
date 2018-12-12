app.factory("messages", function ($q, $http, user) {
    var messages = {};
    var wasEverLoaded = {};

    function Message(plainMessage, fname, lname) {
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
        var usersIds = [];
        var users = [];
        // case of vaad:
        if (user.getActiveUser().email === "vaad@mail.com") {
            substring = "";
        }
        else {
            if (isMessage) {
                substring += "?id=" + user.getActiveUser().id;
            }
        }
        var userId = user.getActiveUser().id;
        // 5 שורות מניר
        if (wasEverLoaded[userId]) {
            async.resolve(messages[userId]);
            alert("Nir: " + messages.length)
        } else {
          

            messages[userId] = [];
            var getMessageURL = "http://my-json-server.typicode.com/tsippysh/House-Committee/messages" + substring;
            
            $http.get(getMessageURL).then(function (response) {
                var flag = (user.getActiveUser().email === "vaad@mail.com");
                user.getUsers().then(function (response2) {
                    users = response2.data;
                    usersIds = response2.data.map(row => row.id);
                    for (var i = 0; i < response.data.length; i++) {
                        if (flag) {
                            var index = usersIds.indexOf(response.data[i].userId);
                            if (index != -1) {

                                var message = new Message(response.data[i], users[index].fname, users[index].lname);
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
                    wasEverLoaded[userId] = true;
                    async.resolve(messages[userId]);
                })

            }, function (error) {
                async.reject(error);
            });

            return async.promise;
        };
    }


    function createMessage(name, description) {
        var async = $q.defer();
        var userId = user.getActiveUser().id;
        var newMessage = new Message({
            id: -1, name: name, description: description,
            userId: userId
        });
        // if working with real server:
        //$http.post("http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes", newRecipe).then.....
        // alert("befor:"+messages.length);
        messages[userId].push(newMessage);
        alert(messages.length);
        alert("type: " + typeof (messages));
        async.resolve(newMessage);
        return async.promise;
    }

    return {
        getActiveUserMessages: getActiveUserMessages,
        createMessage: createMessage
    }
}) 