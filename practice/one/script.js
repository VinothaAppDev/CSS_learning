let thumbnail = document.querySelector(".thumbnail");
let display = document.querySelector(".image-display");

function picChanger(childNo){
  display.children[0].setAttribute("src", `${childNo}.jpeg`);
}

for(let i=0; i<5; i++){
  thumbnail.children[i].addEventListener("click", function(){
    picChanger(i+1);
  });
  thumbnail.children[i].addEventListener("mouseover",() => {
    thumbnail.children[i].style.cursor = "pointer";
  });
}

