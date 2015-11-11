myApp.directive('profileInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "/views/people.html"
        }
    }
);