
let homeButtonStatus = 0;
let previousElement = [];
previousElement.push(null);
homeButton = document.querySelector('.logoback');
backButton = document.querySelector('.backButton');
function homeButtonFunc(){
    if (homeButtonStatus == 0) {
        homeButton.hidden = 1;
        backButton.hidden = 1;
    }
    if (homeButtonStatus == 1) {
        homeButton.hidden = 0;
        backButton.hidden = 0;
    }
}







homeButtonFunc();

backButton.onclick = function() {
    previousElement.pop();
    handler1(previousElement.pop());
}


   

   
function generateAvatarHtml(name, imageName) {
  let ht = '<div class="personCard" onclick="handler1(&#39;' + name + '&#39;)">\
\
                <div class="gradient-border sizeav person_card">\
                    <img src="./img/' + imageName + '" class="avatar sizeav">\
                </div>\
\
                <div class="text7">' + name + '</div>\
\
            </div>     </div>';
            
    return ht;
}

function generatePersonCardHtml(personCard) {
  let ht = '<div class="person-card" onclick="handler1(&#39;' + personCard.name + '&#39;)">\
 <!-- style="width: 188px;height: 188px;" -->\
     <!-- style="width: 280px;height: 352px;" -->\
        <div class="gradient-border2 sizeofavatar">\
            <img src="./img/' + personCard.image + '"  class="round-image sizeofavatar"/>\
        </div>\
        <div class="icon-number">\
            <img src="./img/icon_number.png" class="icon-image"/>\
            <div class="number">' + personCard.child + '</div>\
        </div>\
        <div class="text1">\
            <div class="name">' + personCard.name + '</div>\
            <div class="post">' + personCard.post + '</div>\
        \
        </div>\
        <!-- <img src="personcard.png" style="position: absolute; left: 188px;top: 188px;"/> -->\
    </div>';
            
    return ht;
}

function getNamefromHtml(strHtml) {
  let name = strHtml.substring(strHtml.lastIndexOf("/")+1);
  return name;
}

function changePicName(strHtml, name) {
  //let str = strHtml.substring(0, strHtml.lastIndexOf("/")+1) + name + strHtml.substring(strHtml.lastIndexOf("."));
  let str = strHtml.substring(0, strHtml.lastIndexOf("/")+1) + name;
  return (str);
}





frame3 = document.querySelector('.frame3');


let array = global.inputArray
let topElement = document.querySelector('.top_element');

for (let a of array) {
  a.child = 0; 
}


for (let i = array.length - 1; i > 2; i--) {
    let k = array[i].parent-1;
    array[k].child += array[i].child + 1;
}

function makeHomeReal() {
    
    topElement.src = changePicName(topElement.src, 'logo.png');
    
    document.querySelector('.top_element_outer').classList.remove('gradient-border');
    document.querySelector('.top_element_outer').classList.remove('top_element_round_size');
    document.querySelector('.top_element').classList.remove('top_element_round_size');
    document.querySelector('.top_element').classList.remove('avatar');
    document.querySelector('.top_element').classList.add('top_element_default_size');
    
    
    frame3.innerHTML = '';
    for (let a of array) {
        if (!a.parent) {
            frame3.innerHTML += generateAvatarHtml(a.name, a.image);
        }
    }
    homeButtonStatus = 0;
    homeButtonFunc();
}
makeHomeReal();

homeButton.onclick = function() {
    makeHomeReal();
}




function getChildNames(topName) {
    let topId;
    let childNames = [];
    for (let a of array) {
        if (a.name.toLowerCase() == topName.toLowerCase()) {
            topId = a.id;
            break;
        }
    }
    for (let a of array) {
        if (a.parent == topId) {
            childNames.push([a.name, a.image]);
        }
    }
    return childNames;
}

function getImageName(name) {
    for (let a of array) {
        if (a.name.toLowerCase() == name.toLowerCase()) {
            return a.image;
        }
    }
}

function getChilds(topName) {
    let topId;
    let childNames = [];
    for (let a of array) {
        if (a.name.toLowerCase() == topName.toLowerCase()) {
            topId = a.id;
            break;
        }
    }
    for (let a of array) {
        if (a.parent == topId) {
            childNames.push(a);
        }
    }
    return childNames;
}

let personCards = document.querySelectorAll('.personCard');

topElement = document.querySelector('.top_element');

function handler1(str){
    if (!str) {
        makeHomeReal();
        return;
    }
    previousElement.push(str);
    
    homeButtonStatus = 1;
    homeButtonFunc();
    let name = str;
    topElement.src = changePicName(topElement.src, getImageName(name));
    document.querySelector('.top_element_outer').classList.add('gradient-border');
    document.querySelector('.top_element_outer').classList.add('top_element_round_size');
    document.querySelector('.top_element').classList.add('top_element_round_size');
    document.querySelector('.top_element').classList.add('avatar');
    document.querySelector('.top_element').classList.remove('top_element_default_size');
    
    frame3.innerHTML = '';
    for (let a of getChilds(name)) {
        frame3.innerHTML += generatePersonCardHtml(a);
    }
    
//    personCards = document.querySelectorAll('.person-card');
        
        // for (let a of personCards)
        // a.onclick = function(){
            // alert('Click!!');
        // }
}




  





