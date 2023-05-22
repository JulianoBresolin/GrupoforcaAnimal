var cookieConsent = document.getElementById("cookie-consent");
var cookieAccept = document.getElementById("cookie-accept");


if(localStorage.getItem("cookieAccepted")) {
  cookieConsent.style.display = "none";
  
}

cookieAccept.onclick = function() {
  localStorage.setItem("cookieAccepted", true);
  cookieConsent.style.display = "none";
 
};


