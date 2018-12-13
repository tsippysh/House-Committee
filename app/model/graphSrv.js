app.factory("graphs", function ($q, $http, user, messages) {
    var messagesForVotes = [];
    var allreadyVoted = false;
    var VotesData =[];

// [ 
//     {
//         "questionNumber":1,
//         "text":"nzela",
//         "agree":2,
//         "disagree":4,
//         "total":6
//         },
//           {
//         "questionNumber":2,
//         "text":"nzela2",
//         "agree":2,
//         "disagree":4,
//         "total":6
//         },
//           {
//         "questionNumber":3,
//         "text":"nzela3",
//         "agree":2,
//         "disagree":4,
//         "total":6
//         }
        
        
//         ]
        
       
    // function MessagesForVote(plainMessage, fname, lname) {
    //     this.name = plainMessage.name;
    //     this.id = plainMessage.id;
    //     this.userIdes = [];
    //     this.iswith = ;
    //     this.notiswith = ;
    // }
    // function createGraph(name, description) {

    //     var messagesForVote = new MessagesForVote({
    //         id: id, userIdes: userIdes,
    //         iswith: iswith,
    //         notiswith: notiswith
    //     });
    // }
})





    //     messages.push(newMessage);
    //     async.resolve(newMessage);
    //     return async.promise;
    // }

    // return {
    //     getActiveUserMessages: getActiveUserMessages,
    //     createMessage: createMessage
    // }


    // function getActiveUserMessages(isMessage) {
    //     var async = $q.defer();
    //     // messages = [];
    //     var substring = "";
    //     var usersIds =[];
    //     var users=[];
    //     // case of vaad:
    //     if (user.getActiveUser().email === "vaad@mail.com") {
    //         substring = "";
    //     }
    //     else {
    //         if(isMessage){
    //         substring += "?id=" + user.getActiveUser().id;
    //         }
    //     }



    //     var getMessageURL = "http://my-json-server.typicode.com/tsippysh/House-Committee/messages" + substring;

    //     $http.get(getMessageURL).then(function (response) {
    //         var flag = (user.getActiveUser().email === "vaad@mail.com");
    //         user.getUsers().then(function(response2){
    //              users =response2.data;
    //              usersIds = response2.data.map(row => row.id);
    //              for (var i = 0; i < response.data.length; i++) {
    //                 if (flag) {
    //                     var index = usersIds.indexOf(response.data[i].userId);
    //                     if(index!=-1) {
    //                         // debugger;
    //                         var message = new Message(response.data[i],users[index].fname,users[index].lname);
    //                         messages.push(message);
    //                     } else {
    //                         var message = new Message(response.data[i]);
    //                         messages.push(message);
    //                     }
    //                 } else {
    //                     var message = new Message(response.data[i]);
    //                     messages.push(message);
    //                 }


    //             }
    //             async.resolve(messages);
    //         })


    //     }, function (error) {
    //         async.reject(error);
    //     })
    //     return async.promise;
    // }

