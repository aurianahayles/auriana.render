/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
"use strict";

(function (){

    let protected_route : string[] = ["contact-list"];

    if(protected_route.indexOf(router.ActiveLink) > -1) {

        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }

})();