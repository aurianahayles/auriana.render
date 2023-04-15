/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
"use strict";

(function(){

    /**
     * Instantiate and add contat to localStorage
     * @param {string}fullName
     * @param {string}contactNumber
     * @param {string}emailAddress
     */
    /*
    function AddContact(fullName : string, contactNumber : string, emailAddress : string) : void{
       let contact = new core.Contact(fullName, contactNumber, emailAddress);

        if (contact.serialize()){
            let key = contact.FullName.substring(0.1) + Date.now();
            localStorage.setItem(key, contact.serialize() as string);
        }
    }
    */

    function DisplayHomePage() : void{
        console.log("Display Home Page Called!");

        $("#AboutUsBtn").on("click", () => {
            location.href = "/about";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph!</p>`);

        $("main").append(`<article>
                <p id="ArticleParagraph" class="mt-3">This is my privet article</p></article>`)
    }


    function  DisplayProductsPage() : void{
        console.log("Display Product Page Called!");

    }

    function DisplayServicesPage() : void{
        console.log("Display Services Page Called!");

    }


    function DisplayAboutUsPage() : void{
        console.log("Display About Us Page Called!");

    }

    function ContactFormValidation() : void{
        ValidateField("#fullName"
            , /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,
            "Please enter a valid first and last name. (ex. Peter Parker)");

        ValidateField("#contactNumber"
            ,/^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid contact number.");

        ValidateField("#emailAddress"
            ,/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address.");
    }
    function ValidateField(input_field_id : string, regular_expression : RegExp, error_message : string) : void{

        let messageArea = $("#messageArea");

        $(input_field_id).on("blur", function(){
            let inputFieldText = $(this).val() as string;
            if(!regular_expression.test(inputFieldText)){
                //fail
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();

            }else{
                //pass
                messageArea.removeAttr("class").hide();
            }


        });

    }

    function DisplayContactPage() : void {
        console.log("Display Contact Page Called!");

        $("a[data='contact-list']").off("click");
        $("a[data='contact-list']").off("click", function (){
            location.href = "/contact-list";

        });

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton") as HTMLElement;
        let subscribedCheckbox = document.getElementById("subscribeChekcbox") as HTMLInputElement;

        sendButton.addEventListener("click", function (event){

            if(subscribedCheckbox.checked){
                let fullName = document.forms[0].fullName.value;
                let contactNumber = document.forms[0].contactNumber.value;
                let emailAddress = document.forms[0].emailAddress.value;

                // AddContact(fullName, contactNumber, emailAddress);
            }
        });
    }

    function DisplayContactListPage() : void{
        console.log("Display Contact List Page Called!");

        $("button.delete").on("click", function (event) {

            if (!confirm("Delete contact, please confirm")){
                event.preventDefault();
                location.href = "/contact-list";
            }

        });
    }

    function  DisplayEditPage() : void{
        console.log("Display Edit Page Called");

        ContactFormValidation();

    }

    function DisplayRegisterPage() : void{
        console.log("Display Register Page")
    }

    function DisplayLoginPage() : void{
        console.log("Display Login Page")
    }

    function CheckLogin() : void{
        if(sessionStorage.getItem("user")){

            $("#login").html(`<a id="logout" className="nav-link" href="#">
                      <i className="fa-solid fa-sign-out-alt"></i>Logout</a>`)
        }
        $("#logout").on("clicked", function (){

            sessionStorage.clear();
            location.href = "/home";
        });


    }


    //Used to provide authentication from a user when they access a page
    function AuthGuard() : void{

        let protected_route : string[] = ["contact-list", "edit"];

        if(protected_route.indexOf(location.pathname) > -1) {

            if (!sessionStorage.getItem("user")) {
                location.href = "/login";
            }
        }
    }

    function Display404Page() : void{
        console.log("Display 404 Page")
    }


    function Start() {
        console.log("Application Started!");

        let page_id = $("body")[0].getAttribute("id");

        switch(page_id){
            case "home":
                DisplayHomePage()
                break;
            case "about":
                DisplayAboutUsPage()
                break;
            case "services":
                DisplayServicesPage()
                break;
            case "contact":
                DisplayContactPage()
                break;
            case "contact-list":
                //AuthGuard();
                DisplayContactListPage()
                break;
            case "products":DisplayProductsPage()
                break;
            case "register":
                DisplayRegisterPage()
                break;
            case "login":DisplayLoginPage()
                break;
            case "add":
                // AuthGuard();
                DisplayEditPage()
                break;
            case "edit":
                // AuthGuard();
                DisplayEditPage()
                break;
            case "404":
                Display404Page()
                break;

        }

    }

    window.addEventListener("load", Start)

})();