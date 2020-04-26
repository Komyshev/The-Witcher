

            
function generateAvatarHtml(name, imageName) {
  let ht = '<div class="personCard">\
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
  let ht = '<div class="person-card">\
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
  return name.slice(0, -4);
}

function changePicName(strHtml, name) {
  //let str = strHtml.substring(0, strHtml.lastIndexOf("/")+1) + name + strHtml.substring(strHtml.lastIndexOf("."));
  let str = strHtml.substring(0, strHtml.lastIndexOf("/")+1) + name + ".jpg";
  return (str);
}





frame3 = document.querySelector('.frame3');


let array = global.inputArray
for (let a of array) {
  if (!a.parent) {
      frame3.innerHTML += generateAvatarHtml(a.name, a.image);
      a.child = 0;
  }
  
  
  if (a.parent) {
    array[a.parent-1].child++;
    a.child = 0;
  }  

}

for (let a of array) {
  a.child = 0; 

}

for (let a of array) {
  if (a.parent-1 > 0) {
    array[a.parent - 1].child++;
    
  }  

}

console.log(array);

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
let topElement = document.querySelector('.top_element');


for (var i = 0; i < personCards.length; i++) {
  personCards[i].onclick = function(){
    let name = getNamefromHtml(this.querySelector('.avatar').src);
    topElement.src = changePicName(topElement.src, name);
    document.querySelector('.top_element_outer').classList.add('gradient-border');
    document.querySelector('.top_element_outer').classList.add('top_element_round_size');
    document.querySelector('.top_element').classList.add('top_element_round_size');
    document.querySelector('.top_element').classList.add('avatar');
    document.querySelector('.top_element').classList.remove('top_element_default_size');
    
    frame3.innerHTML = '';
    for (let a of getChilds(name)) {
        frame3.innerHTML += generatePersonCardHtml(a);
    }
    
    personCards = document.querySelectorAll('.personCard');
        console.log(personCards);
        for (let a of personCards)
        a.onclick = function(){
            alert('Click!!');
        }
  }

}


