/**
 * Created by wangyue on 2017/9/28.
 */
var app = angular.module('category', []);
app.controller('listCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
    }).then(function (res) {
        //console.log(res);
        $scope.data = res.data.result;
    })
    $scope.categoryList = function () {
        $scope.number = this.$index;
        $http({
            url: 'http://127.0.0.1:9090/api/getcategory',
            params: {
                titleid: $scope.number
            }
        }).then(function (res) {
            //console.log(res);
            //var str = 'dataList'+number;
            //$scope[str] = res.data.result;
            //console.log($scope.number);
            //$scope.dataList = [];
            //$scope.dataList[$scope.number] = res.data.result;
            //console.log($scope.dataList[$scope.number]);
            //document.querySelector('li.show:nth-of-type('+(number+1)+')').classList.add('height');
            //angular.element(document.querySelectorAll('ul.main li.show')).eq($scope.number).toggleClass('height');
        })
    }
}]);