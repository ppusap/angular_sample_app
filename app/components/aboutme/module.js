let myapp=angular.module("Myapp",[])//for module

let mycontroller=function($scope)
{
    $scope.message="Pratyusha";
}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student={
        FirstName: "Pratyusha",
        LastName: "Pusapati",
        Email:"blablabla@gmail.com"
    }
    $scope.Student=Student;
}
myapp.controller("Student",JSONController)
