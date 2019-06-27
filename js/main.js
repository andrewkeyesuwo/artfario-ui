function reqListener() {
  var data = JSON.parse(this.responseText);
  if(data.imageUrl) {
    document.getElementById("mainPic").src = data.imageUrl;

    if (data.deckImageUrl) {
      document.getElementById("deckPic").src = data.deckImageUrl
    }
  } else {
  	document.getElementById("mainPic").src = 'https:\/\/images.metmuseum.org\/CRDImages\/ep\/original\/DP-17161-001.jpg';
  }
  console.log(data);
}

function setcookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function generateUserCookie() {
  if (getCookie('UserID') != "") {
    ;
  } else {
    setcookie('UserID', Math.random().toString(36).slice(2), 1000)
  }
}
  

function reqError(err) {
  console.log('Fetch Error :-S', err);
}

generateUserCookie()
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open('get', 'https://api.artfar.io/api/myArtHomePage', true);
oReq.send();



