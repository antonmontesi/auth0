 function loginAuth0()
    {
        var form = $("#Auth0Form");
        form.submit();
    }


    $(document).ready(function()
    {
        var form = $("#Auth0Form");

        $("#login") //.... disabilita log in

        if (typeof(Storage) !== "undefined") {
            var data = localStorage.getItem("antiforgery");
            //se in cahce 
        } else {
        // Sorry! No Web Storage support..
        }

        $.get( "/_layout/tokenhtml", function( data ) {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("antiforgery", "data");
            } 
            form.append(data);
            //$("#login"). //abilita login 
        });
        

    });
