var jahreszeiten = ["sommer", "winter", "regen", "baum", "cocktail"];  // Names of the elements
var mausIstAufDerPerson = false
var jahreszeit = jahreszeiten[0];

var personenJahreszeiten = ["Sommer_colored.png", "Winter_colored.png", "Regen_Colored_1.png", "baum", "cocktail"];  // Names of the elements

var personenRegenkleidung = ["Regen_Colored_Hut.png", "Regen_Colored_Jacke.png", "Regen_Colored_Stiefel.png"];  // Names of the elements

function setPage(page) {
    
}

function setJahreszeit(jahreszeit) {
    
    
    

    

    jahreszeiten.forEach(element => {
        document.getElementById("BT" + element).style = "topnav";
    });
    document.getElementById("BT" + jahreszeit).style.backgroundColor = "#04AA6D";

    jahreszeit = jahreszeiten.findIndex(element => element == jahreszeit);
    this.jahreszeit = jahreszeit

    document.getElementById("IVperson").src = personenJahreszeiten[jahreszeit];

    console.log(personenJahreszeiten[jahreszeiten.findIndex(element => element == jahreszeit)])

}

function onMausUeberDerPerson(e) {
    console.log("tset")
    if (mausIstAufDerPerson == true) {
        let bounds = document.getElementById("ROWmain").getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top - document.getElementById("ROWmain").offsetHeight;


        let maxHöhe = document.getElementById("IVperson").offsetHeight;

        let pixel = maxHöhe / 10;
        let kopf = pixel * 3;
        let bauch = kopf + pixel * 5.5;
        let fuss = maxHöhe;


        if (y < kopf) {
            setAuswahl("_Colored_Hut.png")
        } else if (y < bauch) {
            setAuswahl("_Colored_Jacke.png")
        } else {
            setAuswahl("_Colored_Stiefel.png")
        }
    } else {
        
        showBasicPerson()
    }
}

function setAuswahl(region) {
    document.getElementById("IVperson").src = jahreszeiten[jahreszeit] + region
}

function showBasicPerson() {
    document.getElementById("IVperson").src = personenJahreszeiten[jahreszeit]
    mausIstAufDerPerson = false
}