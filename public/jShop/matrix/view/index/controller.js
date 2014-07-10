define([

    'jShop'

], function(jShop){
    "use strict";


    function reducedSimpleMatrix(matrix) {
        var n1 = matrix[0][0].n * matrix[1][1].n;
        var n2 = matrix[0][1].n * matrix[1][0].n;

        return n1 - n2;
    }

    function reducedMatrix(matrix) {
        if (matrix.length == 2) {
            return reducedSimpleMatrix(matrix)
        }
        var string = matrix[0];

        var result = 0;
        for (var n = 0; n < string.length; n++) {
            var nMatrix = [];

            for (var i = 1; i < matrix.length; i++) {
                var subString = matrix[i];

                var newString = []
                for (var j = 0; j < subString.length; j++) {
                    if (j != n) {
                        newString.push(subString[j]);
                    }
                }

                nMatrix.push(newString)
            }

            var index = 1;
            if ((n % 2) == 1) {
                index = -1;
            }

            result += (index * string[n].n * reducedMatrix(nMatrix));
        }

        return result;
    }

    jShop.controller('MatrixIndex', function($scope){
        function gi(i) {
            return {n:i}
        }

        function ganMatrix(n, matrix) {
            var result = [];
            for (var i = 0; i < n; i++) {
                result[i] = [];
                for (var j = 0; j < n; j++) {
                    var N = 0;
                    if (matrix[i] && matrix[i][j] !== undefined) {
                        N = matrix[i][j].n;
                    }
                    result[i][j] = gi(N);
                }
            }

            return result;
        }

        $scope.N = 3;
        $scope.matrix = ganMatrix($scope.N, []);

        $scope.calculate = function() {
            $scope.result = reducedMatrix($scope.matrix);
        }

        $scope.calculate()

        $scope.$watch('N', function() {
            $scope.matrix = ganMatrix($scope.N, $scope.matrix);
        });
    });
});
