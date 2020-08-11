$("#search-crypto").on("click", function(event) {
    event.preventDefault();
    var crypto = $("#crypto-input").val().toUpperCase();
    var queryURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + crypto + "&tsyms=USD,CAD";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(cryptoValue) {
        //How to get the USD/CAD value, for different types of crypto currency?
        //ORDER: Ex: BTC:{BTC:{USD:0.00, CAD:00.00}}
        console.log(cryptoValue[crypto]); //for object within object, put second one in array of FIRST one

        $("#crypto-output").html("Price Per 1 " + crypto + ": $" + cryptoValue[crypto].USD + "(USD)");

    });
});