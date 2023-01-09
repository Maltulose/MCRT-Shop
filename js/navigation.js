var jahreszeiten = ["sommer", "winter", "regen"];  // Names of the elements
var mausIstAufDerPerson = false
var jahreszeit = 0;
var lilaJacke = false; //verhindert, dass lila Jacke durch Mouseover verändert wird

var personenJahreszeiten = ["Sommer_colored.png", "Winter_colored.png", "Regen_Colored_1.png"];  // Names of the elements

var koerperregionenX = ["Links", "Mitte", "Rechts"]
var koerperregionenY = ["KopfOben", "KopfMitte", "KopfUnten", "Bauch", "Hose", "Schuhe"]


function setJahreszeit(jahreszeit) {
    this.lilaJacke = false;
    jahreszeiten.forEach(element => {
        document.getElementById("BT" + element).style = "topnav";
    });
    document.getElementById("BT" + jahreszeit).style.backgroundColor = "#04AA6D";

    this.jahreszeit = jahreszeiten.findIndex(element => element == jahreszeit);

    showBasicPerson()
}

function onMausUeberDerPerson(e) {
    if (mausIstAufDerPerson == true && this.lilaJacke == false) {
        let bounds = document.getElementById("ROWmain").getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top - document.getElementById("ROWmain").offsetHeight;


        let maxHöhe = document.getElementById("IVperson").offsetHeight;
        let maxBreite = document.getElementById("IVperson").offsetWidth;

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

        //switch-case für die verschiedenden Kleidungslängen bei den
        //verschiedenden Jahreszeiten
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
    var pfad = "pictures/" + jahreszeiten[jahreszeit] + "/" + region;

    document.getElementById("IVperson").src = pfad;
}

function showBasicPerson() {
    if (this.lilaJacke == false) {
        var pfad = "pictures/" + jahreszeiten[jahreszeit] + "/" + personenJahreszeiten[jahreszeit];

        document.getElementById("IVperson").src = pfad;
        mausIstAufDerPerson = false;
    }  
}

function openDetailansicht(){
    window.location = "detailansicht.html";
}

function openIndex(){
    window.location = "index.html";
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


function GetCoordinates(e) {
  var Pos = [0,0];
  var ImgPos;
  ImgPos = FindPosition(document.getElementById("SaleAuswahl"));  
  Pos[0] = e.pageX - ImgPos[0];
  Pos[1] = e.pageY - ImgPos[1];
  return Pos;
}

function saleAuswahl(e) {
    var img_width = document.getElementById("SaleAuswahl").clientWidth/800;
    var img_height = document.getElementById("SaleAuswahl").clientHeight/600;
    var Pos;
    var Pos_lilaJacke = [533, 723, 232, 368];
    Pos = GetCoordinates(e);

    if ((Pos_lilaJacke[0]*img_width < Pos[0]) && (Pos[0] < Pos_lilaJacke[1]*img_width) && (Pos_lilaJacke[2]*img_height < Pos[1]) && (Pos[1]< Pos_lilaJacke[3]*img_height)) {
        this.lilaJacke = true;
        document.getElementById("IVperson").src = "/pictures/regen/regen_Colored_lila_Jacke_mit_grau.png";
    }
    
}