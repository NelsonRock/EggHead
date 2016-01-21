angular.module('categories.bookmarks', [
    'categories.bookmarks.create', //bookmarks needs access to the categeories.bookmark functions 
    'categories.bookmarks.edit',
    'eggly.models.categories',     //and the categories.bookmarks. models
    'eggly.models.bookmarks'
]);
