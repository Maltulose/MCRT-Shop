var jahreszeiten = ["sommer", "winter", "regen"];  // Alle 3 Verfügbaren Jahreszeiten
var mausIstAufDerPerson = false // Tracking, ob sich der Mauszeiger über der Person befindet. Wenn dies nicht der Fall ist, so soll die Standard-Figur angezeigt werden
var jahreszeit = 0; // 0 - 2 möglich; siehe var jahreszeiten
var lilaJacke = false; //verhindert, dass lila Jacke durch Mouseover verändert wird
var imAuswahlFenster = true;
var personenJahreszeiten = ["Sommer_colored.png", "Winter_colored.png", "Regen_Colored_1.png"];  // Grundbilder von der Person

var koerperregionenX = ["Links", "Mitte", "Rechts"] //Koordinatenfeld über die Person in X-Richtung
var koerperregionenY = ["KopfOben", "KopfMitte", "KopfUnten", "Bauch", "Hose", "Schuhe"] //Koordinatenfeld über die Person in Y-Richtung


// Setzt die aktuelle Jahreszeit für die entsrepchende Kleiderauswahl
// input: jahreszeit: int im Bereich von LEN(jahreszeiten)


function setJahreszeitAndGoToMainPage(jahreszeit) {
    //Nur dann in eine andere Jahreszeit springen, wenn sie nicht gleich der aktuellen Jahreszeit ist.
    if (jahreszeiten[this.jahreszeit] != jahreszeit) {

        currentItems = sessionStorage.getItem("itemsInCart");
        if(currentItems != null) {
            sessionStorage.setItem("itemsInCart", currentItems + ";" + name);
        } else {
            sessionStorage.setItem("itemsInCart", name);
        }

        sessionStorage.setItem("ausgewähltesWetter", jahreszeit);

        window.location = "index.html";
        setJahreszeit(jahreszeit);
    }
}

function setJahreszeit(jahreszeit) {
    this.lilaJacke = false;
    //Auswahlmenü Reseten
    jahreszeiten.forEach(element => {
        document.getElementById("BT" + element).style = "topnav";
    });
    document.getElementById("BT" + jahreszeit).style.backgroundColor = "#04AA6D";

    this.jahreszeit = jahreszeiten.findIndex(element => element == jahreszeit);
    // Grundbild der entsprechenden Person anzeigen
    showBasicPerson()
}

// Wertet die aktuelle Mausposition über der Figur aus
function onMausUeberDerPerson(e) {
    if (mausIstAufDerPerson == true && this.lilaJacke == false) {
        // Von der absoluten X-Y-Koordinate in ein relatives Koodinatensystem umrechnen, welches oben links im Bild die Werte {0,0} besitzt
        let bounds = document.getElementById("ROWmain").getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top - document.getElementById("ROWmain").offsetHeight;

        //Höhe und Breite des Bildes bestimmen
        let maxHöhe = document.getElementById("IVperson").offsetHeight;
        let maxBreite = document.getElementById("IVperson").offsetWidth;

        // Maßeinheiten für das Bild setzen
        let hoehenEinheit = maxHöhe / 20;
        let breitenEinheit = maxBreite / 3;
        var koerperX, koerperY;

        
        if (x < breitenEinheit) {
            koerperX = koerperregionenX[0];
        } else if (x < breitenEinheit * 1.7) {
            koerperX = koerperregionenX[1];
        } else {
            koerperX = koerperregionenX[2];
        }

        // koeperY auf den Bereich setzen, wo sich die Maus befindet
        //switch-case für die verschiedenden Kleidungslängen bei den verschiedenden Jahreszeiten
        switch (this.jahreszeit) {
            case 0:
                if (y < hoehenEinheit * 3) {
                    koerperY = koerperregionenY[0];
                } else if (y < hoehenEinheit * 6) {
                    koerperY = koerperregionenY[1];
                } else if (y < hoehenEinheit * 7) {
                    koerperY = koerperregionenY[2];
                } else if (y < hoehenEinheit * 12) {
                    koerperY = koerperregionenY[3];
                } else if (y < hoehenEinheit * 18) {
                    koerperY = koerperregionenY[4];
                } else {
                    koerperY = koerperregionenY[5];
                }
                break;
            case 1:
                if (y < hoehenEinheit * 3) {
                    koerperY = koerperregionenY[0];
                } else if (y < hoehenEinheit * 6) {
                    koerperY = koerperregionenY[1];
                } else if (y < hoehenEinheit * 8) {
                    koerperY = koerperregionenY[2];
                } else if (y < hoehenEinheit * 13) {
                    koerperY = koerperregionenY[3];
                } else if (y < hoehenEinheit * 18) {
                    koerperY = koerperregionenY[4];
                } else {
                    koerperY = koerperregionenY[5];
                }
                break;
            default:
                if (y < hoehenEinheit * 3) {
                    koerperY = koerperregionenY[0];
                } else if (y < hoehenEinheit * 6) {
                    koerperY = koerperregionenY[1];
                } else if (y < hoehenEinheit * 7) {
                    koerperY = koerperregionenY[2];
                } else if (y < hoehenEinheit * 15) {
                    koerperY = koerperregionenY[3];
                } else if (y < hoehenEinheit * 18) {
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

// Ermittelt aus den relativen Kooridnaten von dem Bild, wo sich die Maus befindet das dazugehörige Bild
//switch-case für die verschiedenden Kleidungslängen bei den verschiedenden Jahreszeiten
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
                    // Wenn sich die Maus Links oder Rechts befindet, so werden die Handschuhe ausgewählt und nicht die Jacke
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

// Zeigt das gegebende Bild mit der passenden Jahreszeit an
function setAuswahl(region) {
    var pfad = "pictures/" + jahreszeiten[jahreszeit] + "/" + region;
    document.getElementById("IVperson").src = pfad;
    document.getElementById("IVperson").alt = "type of Clothing";
    document.getElementById("IVperson").title = "Wähle eine Kategorie aus.";
}

// Zeigt die Grundfigur im Image-View an
function showBasicPerson() {
    if (this.lilaJacke == false) {
        var pfad = "pictures/" + jahreszeiten[jahreszeit] + "/" + personenJahreszeiten[jahreszeit];

        document.getElementById("IVperson").src = pfad;
        mausIstAufDerPerson = false;
    }  
}

// Funktionen zum aufrufen der anderen Seiten
function openDetailansicht() {
    let pfad = document.getElementById("IVperson").src
    if (pfad.includes("pictures/regen/regen_Colored_Jacke.png")) {
        window.location = "detailansicht.html";
    }
}
function openIndex(){
    window.location = "index.html";
}
function openShoppingCart() {
    window.location = "shopping_cart.html";
}

// hinzufügen eines Artikels zum Warenkorb
function addToCart(name) {
    currentItems = sessionStorage.getItem("itemsInCart");
    if(currentItems != null) {
        sessionStorage.setItem("itemsInCart", currentItems + ";" + name);
    } else {
        sessionStorage.setItem("itemsInCart", name);
    }
}

// Position eines Elements auf der Seite
function FindPosition(oElement) {
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

// Koordinaten im Element/Bild  
function GetCoordinates(e) {
  var Pos = [0,0];
  var ImgPos;
  ImgPos = FindPosition(document.getElementById("SaleAuswahl"));  
  Pos[0] = e.pageX - ImgPos[0];
  Pos[1] = e.pageY - ImgPos[1];
  return Pos;
}

// Auswahl in der Detailansicht
function saleAuswahl(e) {
    console.log(this.imAuswahlFenster);
    var img_width = document.getElementById("SaleAuswahl").clientWidth;
    var img_height = document.getElementById("SaleAuswahl").clientHeight;
    var Pos;
    Pos = GetCoordinates(e);
    // Auswahl vom Artikel (Hier bisher nur lila Jacke)
    if (this.imAuswahlFenster==true){
        var Pos_lilaJacke = [533, 723, 232, 368];
        var img_lilaJacke = [800, 600];
        img_width = img_width/img_lilaJacke[0];
        img_height = img_height/img_lilaJacke[1];
        if ((Pos_lilaJacke[0]*img_width < Pos[0]) && (Pos[0] < Pos_lilaJacke[1]*img_width) && (Pos_lilaJacke[2]*img_height < Pos[1]) && (Pos[1]< Pos_lilaJacke[3]*img_height)) {
            this.lilaJacke = true;
            document.getElementById("IVperson").src = "pictures/regen/regen_Colored_lila_Jacke_mit_grau.png";
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Colored_lila_Jacke.png";
            this.imAuswahlFenster=false;
        }
    } else { // Warenkorb "Button"
        var Pos_shoppingCart = [345, 545, 508, 555];
        var sale_img = [604, 600];
        img_width = img_width/sale_img[0];
        img_height = img_height/sale_img[1];
        if ((Pos_shoppingCart[0]*img_width < Pos[0]) && (Pos[0] < Pos_shoppingCart[1]*img_width) && (Pos_shoppingCart[2]*img_height < Pos[1]) && (Pos[1]< Pos_shoppingCart[3]*img_height)) {
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_finished.png";
            addToCart("Regenjacke lila");
        }
    }
    

    
}