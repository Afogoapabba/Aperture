function changeMode()
{
    if(document.body.classList.contains("darkmode"))
    {
        lightMode()
    }
    else
    {
        darkMode()
    }

}

function darkMode() {
    var element = document.body;
    var content = document.getElementById("btnDarkmode");
    element.className = "darkmode";
    content.innerText = "Dark Mode";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("btnDarkmode");
    element.className = "lightmode";
    content.innerText = "Light Mode";
  }

  function sendMail()
  {
    var content = document.getElementById("notification");
    content.innerText = "Email has been sent. Thank you!"
    content.className = "visible";
    // timeout before notification fade
    setTimeout(function() { content.className = "hidden";}, 5000);
  }