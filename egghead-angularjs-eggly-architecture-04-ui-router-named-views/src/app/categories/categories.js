angular.module('categories', [
    'eggly.models.categories'
])

    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: { //@=absolute path 
                    'categories@': {
                        controller: 'CategoriesCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    },
                    'bookmarks@': { //@=absolute path 
                        controller: 'BookmarksCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    }
                }
            });
    })
    .controller('CategoriesCtrl', function CategoriesCtrl($scope){

    })
    .controller('BookmarksCtrl', function BookmarksCtrl($scope) {

    })
;
