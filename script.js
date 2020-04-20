

            
function generateAvatarHtml(name) {
  let ht = '<div>\
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



