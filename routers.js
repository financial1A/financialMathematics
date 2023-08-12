//code type use for identify href is color codes
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("/red", {
            templateUrl : "red.htm"
        })
        .when("/python", {
            templateUrl : "python.html"
        })
        .when("/green", {
            templateUrl : "fe.html"
        })
        .when("/blue", {
            templateUrl : "about.html"
        })
        .when("/white", {
            templateUrl : "search/bm.html"
        })
        .when("/f34f", {
            templateUrl : "search/heat.html"
        })
        .when("/ff32", {
            templateUrl : "search/latex.html"
        })
        .when("/f432", {
            templateUrl : "search/interp.html"
        })
        .when("/ffff", {
            templateUrl : "search/matrix.html"
        })
        .when("/fttt", {
            templateUrl : "search/la.html"
        })
        .when("/frrr", {
            templateUrl : "search/bisec.html"
        })
        .when("/fgfg", {
            templateUrl : "search/es.html"
        })
        .when("/kjui", {
            templateUrl : "search/dbv.html"
        })
        .when("/bhhb", {
            templateUrl : "search/fcfbv.html"
        })
        .when("/frfr", {
            templateUrl : "search/dcf.html"
        })
        .when("/hhhh", {
            templateUrl : "search/fcfe.html"
        })
        .when("/eeee", {
            templateUrl : "search/rev.html"
        })
        .when("/pppp", {
            templateUrl : "search/mbv.html"
        })
        .when("/rrrr", {
            templateUrl : "search/apm.html"
        })
        .when("/rrrp", {
            templateUrl : "search/capm.html"
        })
        .when("/fggg", {
            templateUrl : "search/aptm.html"
        })
        .when("/fggf", {
            templateUrl : "search/ddm.html"
        })
        .when("/fyyy", {
            templateUrl : "search/evp.html"
        })
        .when("/slem", {
            templateUrl : "search/slem.html"
        })
        .when("/dddde", {
            templateUrl : "search/ev.html"
        })
        .when("/more", {
            templateUrl : "search/heat.html"
        });
        
        
    });
   