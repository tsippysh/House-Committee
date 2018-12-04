app.controller("messagesCtrl", function ($scope, messages) {
    messages.getActiveUserMessages().then(function (messages) {
        $scope.messages = messages;
    }, function (error) {

    })


    //      $scope.messages = [
    //         {
    //             id: 1,
    //             name: "נזילה",
    //             description: "נזילת מים מעל המקלט",
    //             userid:1
    //         },
    //         {
    //             id: 2,
    //             name: "גינה",
    //             description: "צריך לקנות צמחים חדשים לגינה",
    // userid:2}
    //     ]
}) 