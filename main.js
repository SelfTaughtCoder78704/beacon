let modal = document.getElementById("vidModal");
let modal2 = document.getElementById("welcomeModal");
const vid = document.querySelector('#vidModal video')
const work = document.getElementById('work')
const sign = document.getElementById('sign')
const closeWork = document.querySelector('#howItWorks svg')
const closeSign = document.querySelector('#signMeUp svg')
let fullSignBtn = document.getElementById('fullSiteBtn')
fullSignBtn.addEventListener('click', function(){
  modal2.style.display = 'none'
  showSign()
})
// Get the button that opens the modal
let btn = document.getElementById("playBtn");

// Get the <span> element that closes the modal
let span = document.querySelector("#vidModal .close")
let span2 = document.querySelector('#welcomeModal span')

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  vid.play()
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  vid.pause()
}

span2.onclick = function() {
  modal2.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    vid.pause()
  }
}

btn.addEventListener('mouseover', showWhite)
btn.addEventListener('mouseleave', hideWhite)

function showWhite(){
    document.querySelector('#playBtn path').setAttribute('fill', 'white')
    
}


function hideWhite(){
    document.querySelector('#playBtn path').setAttribute('fill', '#154D71')
    
}

work.addEventListener('click', showWork)
function showWork(){
    document.getElementById('howItWorks').style.display = 'block'
    window.scrollTo(0, 0);
}

sign.addEventListener('click', showSign)
function showSign(){
    document.getElementById('signMeUp').style.display = 'block'
    window.scrollTo(0, 0);
}

closeSign.addEventListener('click', function(){
    closePage(document.getElementById('signMeUp'))
})

closeWork.addEventListener('click', function(){
    closePage(document.getElementById('howItWorks'))
})

function closePage(el){
    el.style.display = 'none'
}

// Set the date we're counting down to
var countDownDate = new Date("Feb 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let myCardNo = document.getElementById('CardNumber');
myCardNo.addEventListener('focusout', testCreditCard)


function testCreditCard() {
  let myCardNo = document.getElementById('CardNumber').value;
  let myCardType = document.getElementById('CardType').value;
  if (checkCreditCard(myCardNo, myCardType)) {
    // document.querySelector('.submitAreaBtn').classList.add('animate__fadeInRight')
    // document.querySelector('.submitAreaBtn').style.display = 'block'
    return true
  } else {
    alert(ccErrors[ccErrorNo])
  };
}

let cardOrCheck = document.getElementById('howToPay')

cardOrCheck.addEventListener('click', showCorrectSystem)
cardOrCheck.addEventListener('ontouchstart', showCorrectSystem)
function showCorrectSystem(){
  document.getElementById('cardInfo').style.display = 'none'
  document.getElementById('achInfo').style.display = 'none'
  if(cardOrCheck.value === 'Credit-Debit'){
    document.getElementById('achInfo').style.display = 'none'
    document.getElementById('cardInfo').style.display = 'block'
  }else{
    document.getElementById('achInfo').style.display = 'grid'
    document.getElementById('cardInfo').style.display = 'none'
    document.getElementById('CardNumber').value = ''
  }
}


function signatureCapture() {
  var canvas = document.getElementById("newSignature");
  var context = canvas.getContext("2d");
  canvas.width = 276;
  canvas.height = 180;
  context.fillStyle = "#fff";
  context.strokeStyle = "#444";
  context.lineWidth = 1.5;
  context.lineCap = "round";
  context.fillRect(0, 0, canvas.width, canvas.height);
  var disableSave = true;
  var pixels = [];
  var cpixels = [];
  var xyLast = {};
  var xyAddLast = {};
  var calculate = false;
  {   //functions
    function remove_event_listeners() {
      canvas.removeEventListener('mousemove', on_mousemove, false);
      canvas.removeEventListener('mouseup', on_mouseup, false);
      canvas.removeEventListener('touchmove', on_mousemove, false);
      canvas.removeEventListener('touchend', on_mouseup, false);

      document.body.removeEventListener('mouseup', on_mouseup, false);
      document.body.removeEventListener('touchend', on_mouseup, false);
    }

    function get_coords(e) {
      var x, y;

      if (e.changedTouches && e.changedTouches[0]) {
        var offsety = canvas.offsetTop || 0;
        var offsetx = canvas.offsetLeft || 0;

        x = e.changedTouches[0].pageX - offsetx;
        y = e.changedTouches[0].pageY - offsety;
      } else if (e.layerX || 0 == e.layerX) {
        x = e.layerX;
        y = e.layerY;
      } else if (e.offsetX || 0 == e.offsetX) {
        x = e.offsetX;
        y = e.offsetY;
      }

      return {
        x : x, y : y
      };
    };

    function on_mousedown(e) {
      e.preventDefault();
      e.stopPropagation();

      canvas.addEventListener('mouseup', on_mouseup, false);
      canvas.addEventListener('mousemove', on_mousemove, false);
      canvas.addEventListener('touchend', on_mouseup, false);
      canvas.addEventListener('touchmove', on_mousemove, false);
      document.body.addEventListener('mouseup', on_mouseup, false);
      document.body.addEventListener('touchend', on_mouseup, false);

      empty = false;
      var xy = get_coords(e);
      context.beginPath();
      pixels.push('moveStart');
      context.moveTo(xy.x, xy.y);
      pixels.push(xy.x, xy.y);
      xyLast = xy;
    };

    function on_mousemove(e, finish) {
      e.preventDefault();
      e.stopPropagation();

      var xy = get_coords(e);
      var xyAdd = {
        x : (xyLast.x + xy.x) / 2,
        y : (xyLast.y + xy.y) / 2
      };

      if (calculate) {
        var xLast = (xyAddLast.x + xyLast.x + xyAdd.x) / 3;
        var yLast = (xyAddLast.y + xyLast.y + xyAdd.y) / 3;
        pixels.push(xLast, yLast);
      } else {
        calculate = true;
      }

      context.quadraticCurveTo(xyLast.x, xyLast.y, xyAdd.x, xyAdd.y);
      pixels.push(xyAdd.x, xyAdd.y);
      context.stroke();
      context.beginPath();
      context.moveTo(xyAdd.x, xyAdd.y);
      xyAddLast = xyAdd;
      xyLast = xy;

    };

    function on_mouseup(e) {
      remove_event_listeners();
      disableSave = false;
      context.stroke();
      pixels.push('e');
      calculate = false;
    };
  }
  canvas.addEventListener('touchstart', on_mousedown, false);
  canvas.addEventListener('mousedown', on_mousedown, false);
}
let messages = document.querySelectorAll('.myMessage')
function signatureSave() {
  var canvas = document.getElementById("newSignature");// save canvas image as data url (png format by default)
  var dataURL = canvas.toDataURL("image/png");
  document.getElementById("saveSignature").src = dataURL;
  document.getElementById('down').href = dataURL
  messages.forEach(mess => {
    mess.style.display = 'block'
  })
};

function signatureClear() {
  var canvas = document.getElementById("newSignature");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
  else
      byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}

let lastSign = document.getElementById('lastSign')
lastSign.addEventListener('click', showSign)


let listOfWorkers = [
 ' Andrew Thomas',
'Arthur Stameris',
'Cheryl Cadrin',
'Ernest Lee',
'George Criss',
'Jim Donnelly',
'Kurt Matheson',
'Leandra Khouri',
'Mike Riley',
'Paul Lechiaro',
'Paul Smith',
'Robert Sella',
'Sean Collins'
]

let agentsSelector = document.getElementById('agents')
listOfWorkers.forEach(worker => {
  // create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(worker) );

// set value property of opt
opt.value = worker; 

// add opt to end of select box (sel)
agentsSelector.appendChild(opt)
})