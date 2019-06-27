
function likeArt() {
    if (document.getElementById("mainPic").classList.contains('non-active')) {
        document.getElementById("deckPic").classList.add('non-active')
        document.getElementById("mainPic").classList.remove('non-active')
    } else {
        document.getElementById("mainPic").classList.add('non-active')
        document.getElementById("deckPic").classList.remove('non-active')
    }

    var oReq = new XMLHttpRequest();
    var reqBody = {
        requestType: "like",
        userID: document.cookie
    };
    oReq.onload = function () {
        var data = JSON.parse(this.responseText);
        if (document.getElementById("mainPic").classList.contains('non-active')) {
            document.getElementById("mainPic").src = data.imageUrl;
        } else {
            document.getElementById("deckPic").src = data.imageUrl;
        }
        
        console.log(data);
    };
    oReq.onerror = reqError;
    
    oReq.open('POST', 'https://api.artfar.io/api/myArtHomePage', true);
    oReq.send(JSON.stringify(reqBody));
}

function dislikeArt() {
    if (document.getElementById("mainPic").classList.contains('non-active')) {
        document.getElementById("deckPic").classList.add('non-active')
        document.getElementById("mainPic").classList.remove('non-active')
    } else {
        document.getElementById("mainPic").classList.add('non-active')
        document.getElementById("deckPic").classList.remove('non-active')
    }

    var oReq = new XMLHttpRequest();
    var reqBody = {
        requestType: "dislike",
        userID: document.cookie
    };

    oReq.onload = function () {
        var data = JSON.parse(this.responseText);
        if (document.getElementById("mainPic").classList.contains('non-active')) {
            document.getElementById("mainPic").src = data.imageUrl;
        } else {
            document.getElementById("deckPic").src = data.imageUrl;
        }
        console.log(data);
    }
    oReq.oneerror = reqError;
    oReq.open('POST', 'https://api.artfar.io/api/myArtHomePage', true);
    oReq.send(JSON.stringify(reqBody));
}

function orderArt() { 
    var oReq = new XMLHttpRequest();
    var reqBody = {
        requestType: "order"
    };

    oReq.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
    oReq.onerror = reqError;
    oReq.open('POST', 'https://api.artfar.io/api/myArtHomePage', true);
    oReq.send(JSON.stringify(reqBody));
}