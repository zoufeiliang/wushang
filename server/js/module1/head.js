define(function() {
        'use strict';
        
        class Head{
            constructor() {
                $(function () {
                    $("header").load("http://localhost：8383/index.html")
                }) 
            }
        }
   
        return {
            h: Head
        };
});
