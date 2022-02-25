$(document).ready( function( ) {
    window.port = chrome.runtime.connect({
        name: Math.floor( Math.random()*99 )+"-"+Math.floor( Math.random()*99 )
    });

    let functionLogin = _ => {
        let loading = document.createElement('div');
        loading.innerHTML = "loading";
        document.querySelector('.login-content.login-form.hybrid-login-form.hybrid-login-form-signup').appendChild( loading );

        window.port.onMessage.addListener( response => {
            console.log(response);
            if ( response.action !== "login" ) return;
            let user = response.user;
            let pass = response.password;
            $('#id_userLoginId').val(user);
            $('#id_password').val(pass);
            $('.btn.login-button.btn-submit.btn-small').click( )
        });
        window.port.postMessage({
            action: "load",
            target: null
        })
    }

    let functionPantalla = _ => {
        console.log("pantalla")
        // Si estamos en seleccion de pantalla
        if ( document.querySelector('ul li.profiles') ) {
            window.port.onMessage.addListener( response => {
                if ( response.action !== "screen" ) return;
                let screen = response.screen;
                $('ul li.profiles a').eq(screen).click( );
            });
            window.port.postMessage({
                action: "getScreen"
            })
        }
        // Si no estamos en seleccion de pantalla
        else {
        }
    }

    switch( window.location.pathname ) {
        case "/ve/login":
            console.log("login")
            functionLogin( );
            break;

        case "/browse":
            console.log("browse")
            functionPantalla( );
            break;
    }
    
})