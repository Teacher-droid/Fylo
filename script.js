'use strict';
// quant le document est pret
$(document).ready(() => {
    // https://api.jquery.com/each/
    // https://blog.arcoptimizer.com/5-exemples-de-fonctions-jquery-each
    // sur tout les élément avec la classe btn
    // each => chaque
    $(".btn").each((index, item) => {
        // parametre index => index de l'élément dans la liste "$('.btn')"
        // parametre item  => élément de la liste
        // au click
        $(item).click((e) => {
            // dans data-button j'ai passé l'id de l'input a vérifier
            let inputIdToCheck = $(e.target).data("button");
            let field = $("#" + inputIdToCheck);
            let fieldValue = $(field).val();

            // si l'email est valide
            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fieldValue)) {
                // ... code ...
                $("#" + inputIdToCheck + "_error").addClass("d-none");
            } else {
                // si elle ne l'est pas 
                console.log()
                $("#" + inputIdToCheck + "_error").removeClass("d-none");
            }
        });
    });
});
