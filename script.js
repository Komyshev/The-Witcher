

            
function generateAvatarHtml(name) {
  let ht = '<div class="personCard">\
\
                <div class="gradient-border sizeav person_card">\
                    <img src="./img/' + name + '.jpg" class="avatar sizeav">\
                </div>\
\
                <div class="text7">' + name + '</div>\
\
            </div>     </div>';
            
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
      frame3.innerHTML += generateAvatarHtml(a.name);
      a.child = 0;
  }
  
  
  if (a.parent) {
    array[a.parent].child++;
    a.child = 0;
  }  
  
  
  
  
}

let personCards = document.querySelectorAll('.personCard');
let topElement = document.querySelector('.top_element');
console.log(frame3);
console.log(personCards);

for (var i = 0; i < personCards.length; i++) {
  personCards[i].onclick = function(){
    console.log(topElement);
    topElement.src = changePicName(topElement.src, getNamefromHtml(this.querySelector('.avatar').src));
    document.querySelector('.top_element_outer').classList.add('gradient-border');
    document.querySelector('.top_element_outer').classList.add('top_element_round_size');
    document.querySelector('.top_element').classList.add('top_element_round_size');
    document.querySelector('.top_element').classList.add('avatar');
    document.querySelector('.top_element').classList.remove('top_element');
    console.log(document.querySelector('.top_element_outer'));
    
  };
}




