myApp.directive('profileInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "=",
                action: "&"
            },
            templateUrl: "/views/people.html"
        }
    }
);