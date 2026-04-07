// Typing animation
let text = "Future Software Developer 🚀";
let i = 0;
function typing() {
  if(i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Image popup
document.querySelectorAll('.item img').forEach(img=>{
  img.addEventListener('click', ()=>{
    let popup = document.createElement('div');
    popup.style = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:1000";
    let popupImg = document.createElement('img');
    popupImg.src = img.src;
    popupImg.style.maxWidth = "80%";
    popupImg.style.maxHeight = "80%";
    popupImg.style.borderRadius = "15px";
    popup.appendChild(popupImg);
    popup.addEventListener('click', ()=>popup.remove());
    document.body.appendChild(popup);
  });
});