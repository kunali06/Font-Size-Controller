let text=document.getElementById("text")
  let big=document.getElementById("big")
  let small=document.getElementById("small")
  let reset=document.getElementById("reset");


  let defaultsize=16;
  let size=defaultsize;

  big.addEventListener("click",()=>{
    size++;
    text.style.fontSize=size+"px";
  });
  small.addEventListener("click",()=>{
    size--;
    text.style.fontSize=size+"px";
  });
  reset.addEventListener("click",()=>{
    size=defaultsize;
    text.style.fontSize=size+"px";
  })
