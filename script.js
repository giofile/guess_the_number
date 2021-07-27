
let welkom = prompt("Welkom ! Wat is je naam? ", "");
let persoon = alert("Hallo " + welkom +  ", volg de aanwijzingen op de website")





function nummerRaden() {
    let random = Math.floor(Math.random()*26);
    // console.log(random);

    let persoonRaden
    persoonRaden = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden")
    console.log("u heeft geraden :" + persoonRaden);

    if (persoonRaden < random){
        window.alert ("U heeft te laag geraden")
    } else if (persoonRaden > random){
        window.alert( "U heeft te hoog geraden")

    } else if ( persoonRaden === random){
        window.alert ( "Goed geraden, u heeft gewonnen")
    } else{
        window.alert("Fout, voer een numeriek getal onder de 26 in")
    }
}
