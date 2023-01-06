function setPage(page) {
    
}

function setJahreszeit(jahreszeit) {
    var jahreszeiten = ["sommer", "winter", "regen", "baum", "cocktail"];  // Names of the elements
    var personenJahreszeiten = ["Sommer_colored.png", "Winter_colored.png", "Regen_Colored_1.png", "baum", "cocktail"];  // Names of the elements

    

    jahreszeiten.forEach(element => {
        document.getElementById("BT" + element).style = "topnav";
    });
    document.getElementById("BT" + jahreszeit).style.backgroundColor = "#04AA6D";
    document.getElementById("IVperson").src = personenJahreszeiten[jahreszeiten.findIndex(element => element == jahreszeit)];

    console.log(personenJahreszeiten[jahreszeiten.findIndex(element => element == jahreszeit)])

}