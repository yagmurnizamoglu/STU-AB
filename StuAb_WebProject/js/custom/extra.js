//Projenin kaç ülke,şehir ve üniversitede gerçekleştiğini sayan js kodu
const counter = document.querySelector(".counter")
const counter1 = document.querySelector(".counter1")
const counter2 = document.querySelector(".counter2")

const customCounter = (selector, start, end, duration) => {
    duration = duration / end
    for (let i = start; i <= end; i++) {
        setTimeout(() => {
            selector.innerHTML = i
        }, duration * i)
    }
}

customCounter(counter, 0, 10, 2000)
customCounter(counter1, 0, 20, 2000)
customCounter(counter2, 0, 24, 2000)



//Seçilen şehire göre yaşam masrafını, seçilen okula ve öğrenim durumuna göre de öğrenim ücretini hesaplayan js kodu

var city = ["Istanbul", "Izmir", "Antalya", "Munich", "Berlin", "Hamburg", "Dresden", "Frankfurt", "Aachen", "Rome", "Milan", "Florance"];

var housingCost = [750, 500, 400, 1500, 1300, 1200, 800, 1000, 1200, 800, 650, 700];

var traCost = [100, 25, 0];

var sum = 0;
var c = 0;
var funPrice

function calcLiv() {
    document.getElementById("costofliving").innerHTML = "";
    document.getElementById("total").innerHTML = "";

    var p = document.getElementById("selectedCity").value;
    var basePrice = housingCost[p];
    sum += basePrice;
    funPrice = 0;
    if (document.getElementById("park").checked) {
        funPrice = 200;
    }
    else if (document.getElementById("home").checked) {
        funPrice = 400;
    } else if (document.getElementById("party").checked) {
        funPrice = 700;
    }

    transportationPrice = 0;
    if (document.getElementById("byCar").checked) {
        transportationPrice += traCost[0];
    }
    else if (document.getElementById("public").checked) {
        transportationPrice += traCost[1];
    } else if (document.getElementById("bike").checked) {
        transportationPrice += traCost[2];
    }


    var total = basePrice + funPrice + transportationPrice;

    document.getElementById("costofliving").innerHTML += "Average monthly rental price in" + " " + city[p] + ":" + " " + basePrice + "£" + "<br>" + "<br>"+ "Average transportation cost per month" + ":" + " " + transportationPrice + "£" + "<br>"+ "<br>" + "Monthly entertainment expense" + ":" + " " + funPrice + "£";

    document.getElementById("total").innerHTML += "Average cost of living total in" + " " + city[p] + ":" + " " + total + "£";



}





//KAYIT
function sifreKontrol() {

    var kullanici = [(document.getElementById("email").value), (document.getElementById("sifre").value)];

    var sifre2 = document.getElementById("reSifre").value;
    var mailcheck = "@";
    var yazi = document.getElementById("sonuc");


    if (kullanici[0] == "") {
        document.getElementById("mailhata").innerHTML = "Email addres cannot be blank";

    }
    else if (kullanici[0].indexOf(mailcheck) == -1) {
        document.getElementById("mailhata").innerHTML = "Please enter a valid e-mail address.";

    }
    else if (kullanici[1] == "") {
        document.getElementById("sifre1hata").innerHTML = "Password cannot be blank.";

    }
    else if (kullanici[1].length < 6) {
        document.getElementById("sifre1hata").innerHTML = "Password must contain at least 6 characters.";

    }
    else if (kullanici[1] == sifre2) {

        yazi.innerHTML = "Account created successfully!";
        yazi.style.color = "green";

        sessionStorage.setItem("user", kullanici);

        window.location.href = "signin.html"

    }
    else {
        yazi.innerHTML = "Passwords do not match, please retype.";
        yazi.style.color = "red";
    }
}





//GİRİŞ

function girisKontrol() {
    var kullanici = sessionStorage.getItem("user");

    kullanici = kullanici.split(",");

    var isLogin = false;

    var mail = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;

    var yazi = document.getElementById("sonuc");

    if (mail == kullanici[0] && sifre == kullanici[1]) {

        yazi.innerHTML = "Login information is correct!";
        yazi.style.color = "green";


        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "User: " + kullanici[0];

        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

        window.location.href = "index.html"

    }
    else {
        yazi.innerHTML = "Iincorrect login information.";
        yazi.style.color = "red";
    }


}


//GİRİŞ KONTROL
function checkLogin() {

    var isLogin = sessionStorage.getItem("isLogin");

    var user = sessionStorage.getItem("user");
    user = user.split(",");

    var username = user[0];

    if (isLogin == "true") {

        document.getElementById("applyNow").style.display = "block";
        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "User: " + username;
        document.getElementById("logout_Btn").style.display = "block";
        document.getElementById("girislink").style.display = "none";

    }

}


//ÇIKIŞ
function logout() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("applyNow").style.display = "none";

    location.reload();

    window.location.href = "index.html"
}


//ENGEL DURUMUNA GÖRE AÇIKLAMA EKLEYEN FONKSİYON
function disabilityText() {

    var radio_yes = document.getElementById("disab_yes");
    var radio_no = document.getElementById("disab_no");


    if (radio_yes.checked) {
        document.getElementById("describeDisability").style.display = "block";
    }

    else if (radio_no.checked) {
        document.getElementById("describeDisability").style.display = "none";

    }
}


//FORM ELEMANLARININ BİR KISMI İÇİN KONTROL (inputlarda gerekli yerlere required eklendiği için boş kalan bölüm varsa submit etmiyor. Fakat burada bir fonksiyonla kontrol etmek için örnek fonksiyon hazırlandı.)
document.getElementById("firstName").addEventListener("input", formKontrol);
document.getElementById("lasttName").addEventListener("input", formKontrol);
document.getElementById("idNo").addEventListener("input", formKontrol);

function formKontrol() {
    var kisisel = [(document.getElementById("firstName").value), (document.getElementById("lastName").value), (document.getElementById("idNo").value)];


    var yazi = document.getElementById("yazi");


    if (kisisel[0] == "" || kisisel[0] == null) {
        document.getElementById("firstNameError").style.display = "block";
    }
    else if (kisisel[0] != "" || kisisel[0] != null) {
        document.getElementById("firstNameError").style.display = "none";
        if (kisisel[1] == "" || kisisel[1] == null) {
            document.getElementById("lastNameError").style.display = "block";
        }
        else if (kisisel[1] != "" || kisisel[1] != null) {
            document.getElementById("lastNameError").style.display = "none";
            if (kisisel[2] == "" || kisisel[2] == null) {
                document.getElementById("idError").style.display = "block";
            }
            else if (kisisel[2] != "" || kisisel[2] != null) {
                document.getElementById("idError").style.display = "none";
            }
        }



    } else {
        yazi.innerHTML = "Account created successfully!";
        yazi.style.color = "green";
    }
}


