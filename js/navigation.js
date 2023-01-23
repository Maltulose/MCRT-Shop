var jahreszeiten = ["sommer", "winter", "regen"];  // Alle 3 Verfügbaren Jahreszeiten
var mausIstAufDerPerson = false // Tracking, ob sich der Mauszeiger über der Person befindet. Wenn dies nicht der Fall ist, so soll die Standard-Figur angezeigt werden
var jahreszeit = 0; // 0 - 2 möglich; siehe var jahreszeiten
var lilaJacke = false; //verhindert, dass lila Jacke durch Mouseover verändert wird
var imAuswahlFenster = true;
var imSaleFenster = false;
var groesseGesetzt = false;
var groessenAuswahl = "";
var personenJahreszeiten = ["Sommer_colored.png", "Winter_colored.png", "Regen_Colored_1.png"];  // Grundbilder von der Person

var koerperregionenX = ["Links", "Mitte", "Rechts"] //Koordinatenfeld über die Person in X-Richtung
var koerperregionenY = ["KopfOben", "KopfMitte", "KopfUnten", "Bauch", "Hose", "Schuhe"] //Koordinatenfeld über die Person in Y-Richtung




// Setzt die aktuelle Jahreszeit für die entsprechende Kleiderauswahl und geht zurück zur Hauptseite
// input: jahreszeit: int im Bereich von LEN(jahreszeiten)
function setJahreszeitAndGoToMainPage(jahreszeit) {
    //Nur dann in eine andere Jahreszeit springen, wenn sie nicht gleich der aktuellen Jahreszeit ist.
    sessionStorage.setItem("ausgewähltesWetter", jahreszeit);
    window.location = "index.html";
    setJahreszeit(jahreszeit);
}

// Setzt die aktuelle Jahreszeit für die entsprechende Kleiderauswahl
// input: jahreszeit: int im Bereich von LEN(jahreszeiten)
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
function addToCart(name, size) {
    currentItems = sessionStorage.getItem("itemsInCart");
    appendItem = name + "," + size;
    if(currentItems != null) {
        splitItems = currentItems.split(";");
        // for each search for item
        for(i = 0; i < splitItems.length; i++) {
            itemInformation = splitItems[i].toString().split(",");
            if((itemInformation[0] + "," + itemInformation[1]) == appendItem) {
                newItemString = appendItem + "," + (parseInt(itemInformation[2]) + 1);
                splitItems[i] = newItemString;
                sessionStorage.setItem("itemsInCart", splitItems.reduce(concatString, ""));
                return;
            }
        }
        splitItems.push(appendItem + ",1");
        sessionStorage.setItem("itemsInCart", splitItems.reduce(concatString, ""));
    } else {
        sessionStorage.setItem("itemsInCart", appendItem + ",1");
    }

    document.getElementById("TVnumberOfItemsInCart").innerHTML = getCountOfItemsInChart();
}

function concatString(current, toAdd) {
    if(current == "") {
        return toAdd;
    }
    return current + ";" + toAdd;
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

//Gibt die Anzahl an Produkten zurück, welche sich im Einkaufswagen befinden.
function getCountOfItemsInChart() {
    let currentItems = sessionStorage.getItem("itemsInCart");
    if (currentItems == null) {
        return 0;
    } else {
        count = 0;
        splitItem = currentItems.split(";");
        for(var counter = 0; counter < splitItem.length; counter++) {
            itemInformation = splitItem[counter].split(",");
                count += parseInt(itemInformation[2]);
        }
        return count;
    }
}

// Auswahl in der Detailansicht
function saleAuswahl(e) {
    var img_width = document.getElementById("SaleAuswahl").clientWidth;
    var img_height = document.getElementById("SaleAuswahl").clientHeight;
    var Pos;
    Pos = GetCoordinates(e);
    // Auswahl vom Artikel (Hier bisher nur lila Jacke)
    if (this.imAuswahlFenster==true){
        var Pos_lilaJacke = [533, 723, 232, 368];
        var img_lilaJacke = [800, 600];
        var Pos_X = [744, 797, 3, 55];
        img_width = img_width/img_lilaJacke[0];
        img_height = img_height/img_lilaJacke[1];
        // lila Jacke
        if ((Pos_lilaJacke[0]*img_width < Pos[0]) && (Pos[0] < Pos_lilaJacke[1]*img_width) && (Pos_lilaJacke[2]*img_height < Pos[1]) && (Pos[1]< Pos_lilaJacke[3]*img_height)) {
            this.lilaJacke = true;
            document.getElementById("IVperson").src = "pictures/regen/regen_Colored_lila_Jacke_mit_grau.png";
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Colored_lila_Jacke.png";
            this.saleFenster=true;
            this.imAuswahlFenster=false;
        }
        // Cancel
        if ((Pos_X[0]*img_width < Pos[0]) && (Pos[0] < Pos_X[1]*img_width) && (Pos_X[2]*img_height < Pos[1]) && (Pos[1]< Pos_X[3]*img_height)) { 
            setJahreszeitAndGoToMainPage(this.jahreszeiten[this.jahreszeit]);
            this.groesseGesetzt = false;
        }

    } else if (this.saleFenster==true){ 
        var Pos_S = [345, 395, 370, 414];
        var Pos_M = [405, 453, 370, 414];
        var Pos_L = [462, 510, 370, 414];
        var Pos_shoppingCart = [345, 545, 508, 555];
        var Pos_X = [539, 591, 19, 69];
        var sale_img = [604, 600];
        img_width = img_width/sale_img[0];
        img_height = img_height/sale_img[1];
        // Warenkorb
        if ((Pos_shoppingCart[0]*img_width < Pos[0]) && (Pos[0] < Pos_shoppingCart[1]*img_width) && (Pos_shoppingCart[2]*img_height < Pos[1]) && (Pos[1]< Pos_shoppingCart[3]*img_height)) {
            if (groesseGesetzt) {
                document.getElementById("SaleAuswahl").src = "pictures/sale/sale_finished.png"; 
                addToCart("Regenjacke lila", this.groessenAuswahl);
                this.saleFenster=false;
                this.imAuswahlFenster=true;
                this.groesseGesetzt = false;
                // 2 sekunden warten dann wechseln
                setTimeout(() => { 
                    document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Auswahl.png";
                }, 1000);               
            } else {
                alert("Wählen Sie zunächst eine Größe aus!")
            }
        }  
        // Groesse S
        if ((Pos_S[0]*img_width < Pos[0]) && (Pos[0] < Pos_S[1]*img_width) && (Pos_S[2]*img_height < Pos[1]) && (Pos[1]< Pos_S[3]*img_height)) {
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Colored_lila_Jacke_S.png";
            this.groessenAuswahl = "S";
            this.groesseGesetzt = true;
        } 
        // Groesse M
        if ((Pos_M[0]*img_width < Pos[0]) && (Pos[0] < Pos_M[1]*img_width) && (Pos_M[2]*img_height < Pos[1]) && (Pos[1]< Pos_M[3]*img_height)) { 
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Colored_lila_Jacke_M.png";
            this.groessenAuswahl = "M";
            this.groesseGesetzt = true;
        } 
        // Groesse L
        if ((Pos_L[0]*img_width < Pos[0]) && (Pos[0] < Pos_L[1]*img_width) && (Pos_L[2]*img_height < Pos[1]) && (Pos[1]< Pos_L[3]*img_height)) { 
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Colored_lila_Jacke_L.png";
            this.groessenAuswahl = "L";
            this.groesseGesetzt = true;
        } 
        // Cancel
        if ((Pos_X[0]*img_width < Pos[0]) && (Pos[0] < Pos_X[1]*img_width) && (Pos_X[2]*img_height < Pos[1]) && (Pos[1]< Pos_X[3]*img_height)) { 
            document.getElementById("SaleAuswahl").src = "pictures/sale/sale_Auswahl.png";
            this.groesseGesetzt = false;
            this.saleFenster=false;
            this.imAuswahlFenster=true;
        }
    }  
}