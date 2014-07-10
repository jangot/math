define([

    '../jShop',

    'matrix/view/index/controller'

], function(jShop) {
    "use strict";

    jShop.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body.matrix',
            routeConstructorProvider.build({
                url: '/matrix',
                view: 'matrix/index',
                page: {
                    title: 'Матрицы'
                },
                menu: {
                    state: 'body.matrix',
                    title: 'Матрицы'
                }
            })
        );
    });

});