var jahreszeiten = ["sommer", "winter", "regen"];  // Names of the elements
var mausIstAufDerPerson = false
var jahreszeit = 0;

var personenJahreszeiten = ["Sommer_colored.png", "Winter_colored.png", "Regen_Colored_1.png"];  // Names of the elements

var koerperregionenY = ["KopfOben", "KopfMitte", "KopfUnten", "Bauch", "Hose", "Schuhe"]
var koerperregionenX = ["Links", "Mitte", "Rechts"]


function setJahreszeit(jahreszeit) {
    jahreszeiten.forEach(element => {
        document.getElementById("BT" + element).style = "topnav";
    });
    document.getElementById("BT" + jahreszeit).style.backgroundColor = "#04AA6D";

    jahreszeit = jahreszeiten.findIndex(element => element == jahreszeit);
    this.jahreszeit = jahreszeit

    //document.getElementById("IVperson").src = personenJahreszeiten[jahreszeit];
    showBasicPerson()
    console.log(personenJahreszeiten[jahreszeiten.findIndex(element => element == jahreszeit)])

}

function onMausUeberDerPerson(e) {
    if (mausIstAufDerPerson == true) {
        let bounds = document.getElementById("ROWmain").getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top - document.getElementById("ROWmain").offsetHeight;


        let maxHöhe = document.getElementById("IVperson").offsetHeight;
        let maxBreite = document.getElementById("IVperson").offsetWidth;


        let pixel = maxHöhe / 20;
        let breite = maxBreite / 3;
        var koerperX, koerperY;

        if (x < breite) {
            koerperX = koerperregionenX[0];
        } else if (x < breite * 1.7) {
            koerperX = koerperregionenX[1];
        } else {
            koerperX = koerperregionenX[2];
        }



        switch (this.jahreszeit) {
            case 0:
                if (y < pixel * 3) {
                    koerperY = koerperregionenY[0];
                } else if (y < pixel * 6) {
                    koerperY = koerperregionenY[1];
                } else if (y < pixel * 7) {
                    koerperY = koerperregionenY[2];
                } else if (y < pixel * 12) {
                    koerperY = koerperregionenY[3];
                } else if (y < pixel * 18) {
                    koerperY = koerperregionenY[4];
                } else {
                    koerperY = koerperregionenY[5];
                }
                break;
            case 1:
                if (y < pixel * 3) {
                    koerperY = koerperregionenY[0];
                } else if (y < pixel * 6) {
                    koerperY = koerperregionenY[1];
                } else if (y < pixel * 8) {
                    koerperY = koerperregionenY[2];
                } else if (y < pixel * 13) {
                    koerperY = koerperregionenY[3];
                } else if (y < pixel * 18) {
                    koerperY = koerperregionenY[4];
                } else {
                    koerperY = koerperregionenY[5];
                }
                break;
        
            default:
                if (y < pixel * 3) {
                    koerperY = koerperregionenY[0];
                } else if (y < pixel * 6) {
                    koerperY = koerperregionenY[1];
                } else if (y < pixel * 7) {
                    koerperY = koerperregionenY[2];
                } else if (y < pixel * 15) {
                    koerperY = koerperregionenY[3];
                } else if (y < pixel * 18) {
                    koerperY = koerperregionenY[4];
                } else {
                    koerperY = koerperregionenY[5];
                }
                break;
        }

        

        var bild = getPictureName(koerperX, koerperY);
        setAuswahl(bild)
    } else {
        showBasicPerson()
    }
}

function getPictureName(xKoordinate, yKoordinate) {
    switch (this.jahreszeit) {
        case 0:
            switch (yKoordinate) {
                case koerperregionenY[0]:
                    return jahreszeiten[jahreszeit] + "_Colored_Hut.png"
                case koerperregionenY[1]:
                    return jahreszeiten[jahreszeit] + "_Colored_Brille.png"
                case koerperregionenY[2]:
                    return jahreszeiten[jahreszeit] + "_Colored_Brille.png"
                case koerperregionenY[3]:
                    return jahreszeiten[jahreszeit] + "_Colored_Jacke.png"
                case koerperregionenY[4]:
                    return jahreszeiten[jahreszeit] + "_Colored_Hose.png"
                case koerperregionenY[5]:
                    return jahreszeiten[jahreszeit] + "_Colored_Stiefel.png"
                default:
                    break;
            }
        case 1:
            switch (yKoordinate) {
                case koerperregionenY[0]:
                    return jahreszeiten[jahreszeit] + "_Colored_Hut.png"
                case koerperregionenY[1]:
                    return jahreszeiten[jahreszeit] + "_Colored_Ohrschuetzer.png"
                case koerperregionenY[2]:
                    return jahreszeiten[jahreszeit] + "_Colored_Schal.png"
                case koerperregionenY[3]:
                    
                    return jahreszeiten[jahreszeit] + "_Colored_Jacke.png"
                case koerperregionenY[4]:
                    if (xKoordinate == koerperregionenX[0] || xKoordinate == koerperregionenX[2]) {
                        return jahreszeiten[jahreszeit] + "_Colored_Handschuhe.png"
                    }
                    return jahreszeiten[jahreszeit] + "_Colored_Jacke.png"
                case koerperregionenY[5]:
                    return jahreszeiten[jahreszeit] + "_Colored_Stiefel.png"
                default:
                    break;
            }
        case 2:
            switch (yKoordinate) {
                case koerperregionenY[0]:
                    return jahreszeiten[jahreszeit] + "_Colored_Hut.png"
                case koerperregionenY[1]:
                    return jahreszeiten[jahreszeit] + "_Colored_Hut.png"
                case koerperregionenY[2]:
                    return jahreszeiten[jahreszeit] + "_Colored_Jacke.png"
                case koerperregionenY[3]:
                    if (xKoordinate == koerperregionenX[0]) {
                        return jahreszeiten[jahreszeit] + "_Colored_Schirm.png"
                    }
                    return jahreszeiten[jahreszeit] + "_Colored_Jacke.png"
                case koerperregionenY[4]:
                    if (xKoordinate == koerperregionenX[0]) {
                        return jahreszeiten[jahreszeit] + "_Colored_Schirm.png"
                    }
                    return jahreszeiten[jahreszeit] + "_Colored_Stiefel.png"
                case koerperregionenY[5]:
                    if (xKoordinate == koerperregionenX[0]) {
                        return jahreszeiten[jahreszeit] + "_Colored_Schirm.png"
                    }
                    return jahreszeiten[jahreszeit] + "_Colored_Stiefel.png"
                default:
                    break;
            }
        default:
            return "error"
    }
}

function setAuswahl(region) {
    var pfad = "pictures/" + jahreszeiten[jahreszeit] + "/" + region

    document.getElementById("IVperson").src = pfad
}

function showBasicPerson() {
    var pfad = "pictures/" + jahreszeiten[jahreszeit] + "/" + personenJahreszeiten[jahreszeit]

    document.getElementById("IVperson").src = pfad
    mausIstAufDerPerson = false
}