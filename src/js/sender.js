$(document).ready(function(){
    window.port = chrome.runtime.connect({
        name: Math.floor( Math.random()*99 )+"-"+Math.floor( Math.random()*99 )
    });
    $("#btn-login-netflix").click(ev=>{
        window.port.postMessage({
            action: 'save',
            data:{
                user: $("#user-netflix").val(),
                pass: $("#pass-netflix").val(),
                screen: $("#screen-netflix").val()
            }            
        })
    })
})