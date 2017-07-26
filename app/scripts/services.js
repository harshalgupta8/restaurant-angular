'use strict';

angular.module('confusionApp')

	.factory('menuFactory', function(){

		var menufac = {};

		
            menufac.getDishes = function(){
                    return $http.get(baseURL + 'dishes');
            };

            menufac.getDish = function (index) {
                    return $http.get(baseURL + 'dishes' + index);
            };
            return menufac;
	});
