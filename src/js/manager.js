$(document).ready( function( ) {
    let getUserData = _ => {
        window.port.onMessage( response => {
            return
        });
        window.port.postMessage({
            action: "getUserData"
        })
    }
    let data = getUserData( );

    let functionLogin = _ => {
        let loading = document.createElement('div');
        loading.innerHTML = "loading";
        document.querySelector('login').appendChild( loading );
        $(".login-content.login-form.hybrid-login-form.hybrid-login-form-signup").addClass('hidden');

        window.port.onMessage.addListener( response => {
            console.log(response);
            if ( response.action !== "login" ) return;
            let user = response.user;
            let pass = response.password;
            $('userInput').val(user);
            $('passInput').val(pass);
            $('btnSubmit').click( )
        });
        window.port.postMessage({
            action: "checkUserData",
            user: user,
            pass: pass
        })
    }

    let functionPantalla = _ => {
        $('pantallasNoActivas').addClass('disableScreen');

    }
    switch( window.location ) {
        case "login":
            functionLogin( );
            break;

        case "pantallas":
            functionPantalla( );
            break;
    }
})