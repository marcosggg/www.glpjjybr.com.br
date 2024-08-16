


document.getElementById("accept-cookie").onclick = function() {
    // Esconde o aviso de cookies
    document.getElementById("cookie-consent").style.display = "none";
    
    // Redireciona para outra página após 300ms (tempo para o aviso desaparecer)
    setTimeout(function() {
        window.location.href = "outra_pagina.html"; // Substitua "outra_pagina.html" pelo URL desejado
    }, 300);
};