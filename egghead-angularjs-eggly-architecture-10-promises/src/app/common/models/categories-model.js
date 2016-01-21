angular.module('eggly.models.categories', [

])
    .service('CategoriesModel', function ($http, $q) { //inject the q service
        var model = this,
            URLS = {
                FETCH: 'data/categories.json'
            },
            categories;

        function extract(result) {
            return result.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        //q.when takes an object and it wraps a promise around it, in the promise, put the categories

        model.getCategories = function() {
            return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
        };

        //q.defer returns a deffered object
        //

        model.getCategoryByName = function(categoryName) {
            var deferred = $q.defer();


            //convenince method that loops over the categories collection and compare the name of the current
            //category with the parameter  
            function findCategory(){
                return _.find(categories, function(c){
                    return c.name == categoryName;
                });
            }
            //if categories exist, resolve the promise with the result of findCategory
            if(categories) {
                deferred.resolve(findCategory());
            //if they don't exist, then you need to call getCategories(), and take the result to resolve the promise
            } else {
                model.getCategories()
                    .then(function() {
                        deferred.resolve(findCategory());
                    });
            }

            return deferred.promise;
            //return the promise 
        };


    })
;
