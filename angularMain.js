//var app = angular.module('myApp', []);
app.controller('mainCtrl', ['$scope', '$http', '$interval', '$location', '$timeout', '$rootScope', '$window', function ($scope, $http, $interval, $location, $timeout, $rootScope, $window) {
	
	$scope.disableStaff = true;
	$scope.disableSubmit = true;
	$scope.disableSubmit2 = true;
	
	$scope.data = {
        availableOptions: [
            {
                id: 'aus',
                name: 'Australia'
            },
            {
                id: 'ca',
                name: 'Canada'
            },
            {
                id: 'uk',
                name: 'UK'
            }
    ],
        selectedOption: {
            id: '',
            name: ''
        }
    };
	
    $scope.data3 = {
        availableOptions: [
            {
                id: 'GBP',
                name: 'GBP'
            },
            {
                id: 'USD',
                name: 'USD'
            },
            {
                id: 'AUD',
                name: 'AUD'
            },
            {
                id: 'CAD',
                name: 'CAD'
            }
    ],
        selectedOption: {
            id: 'AUD',
            name: 'AUD'
        }
    };
	
	getAllBammboDate();
    function getAllBammboDate() {
		$http({method: 'GET', url: 'controller/callBambooHR.php'}).success(function(data) {
				

				console.log(data);
//				console.log('total employees number', data.employees.length);
				$scope.allEmployees = data.employees;
//				console.log(data.employees.length);
//				console.log(data.employees[0].fullName2);
//				$scope.data2 = [];
//				
//				 for (i = 0; i < data.employees.length; i++)
//					 {
//						 if(data.employees[i].location == $scope.data.selectedOption.name)
//							 {
//								 var res = data.employees[i].fullName2.split(", ");
//								 
//								 var oneRecord = {
//    								name: res[1] + ' ' + res[0],
//    								location: data.employees[i].location
//						 			};
//						 			$scope.data2.push(oneRecord);
//							 }
//
//					 }
//				
//				console.log($scope.data2);
//				console.log($scope.data2.length);
				
				
				
			
	 $scope.teamChanged = function () {
		
//			console.log($scope.data.selectedOption.name);
		 	$scope.disableStaff = false;
		 	$scope.data2 = [];
		 
		 if ($scope.allEmployees)
			 {
					for (i = 0; i < $scope.allEmployees.length; i++)
				{
				
					if(($scope.allEmployees[i].department == 'Sales') && ($scope.allEmployees[i].location == $scope.data.selectedOption.name) && ($scope.allEmployees[i].status == 'Active'))
						{
							
							var oneRecord = {
    								name: $scope.allEmployees[i].firstName + ' ' + $scope.allEmployees[i].lastName,
    								location: $scope.allEmployees[i].location,
									department: $scope.allEmployees[i].department
						 			};
						 			$scope.data2.push(oneRecord);
						}
				}
			 }


//		 console.log($scope.data2.length);
		 
		$scope.disableSubmit = true;//because name list will be changed auto after country changed
    };
			
			
			
			
    		});
		
    };
	
	
	
	

	
	
	$scope.AllInputChange = function () {
		checkSubmit();
			
    };
	
	$scope.AllInputChange2 = function () {
		checkSubmit2();
			
    };
	
	
	
	
	    function checkSubmit() {
//			console.log($scope.staff);
			
			if(($scope.data.selectedOption.name) && ($scope.staff) && ($scope.email) && ($scope.note) && ($scope.amount) && ($scope.data.selectedOption.name != '') && ($scope.staff.name != '') && ($scope.email != '') && ($scope.note != '') && ($scope.amount != ''))
				{
					$scope.disableSubmit = false;
				}else
					{
						$scope.disableSubmit = true;
					}
		
    };
	
		function checkSubmit2() {
			
			if(($scope.data.selectedOption.name) && ($scope.staff) && ($scope.salesAmount) && ($scope.day) && ($scope.data.selectedOption.name != '') && ($scope.staff.name != '') && ($scope.salesAmount != '') && ($scope.day != ''))
				{
					$scope.disableSubmit2 = false;
				}else
					{
						$scope.disableSubmit2 = true;
					}
		
    };
	
	$scope.submitForm = function () {
			$http({
    			url: 'controller/submit.php', 
    			method: 'GET',
    			params: {team: $scope.data.selectedOption.name, staff: $scope.staff.name, email: $scope.email, note: $scope.note, amount: $scope.amount, currency: $scope.data3.selectedOption.name}
 			}).then(function(response) {
          			console.log(response.status);
					console.log(response.data);
					$window.location.reload();
				
        		},function(response) {
          			$console.log('error');
      			});
					   
			
    };
	
		$scope.submitForm2 = function () {
			$http({
    			url: 'controller/submitPresentation.php', 
    			method: 'GET',
    			params: {team: $scope.data.selectedOption.name, staff: $scope.staff.name, day: $scope.day, salesAmount: $scope.salesAmount}
 			}).then(function(response) {
          			console.log(response.status);
					console.log(response.data);
					$window.location.reload();
				
        		},function(response) {
          			$console.log('error');
      			});
					   
			
    };
	
}]);