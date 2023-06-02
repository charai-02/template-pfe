// quantity + and - 
const minus=document.querySelector(".minus");
const num=document.querySelector(".num");
const plus=document.querySelector(".plus");
let a = 1;
plus.addEventListener("click", ()=> {
  a++;
  num.innerText = a;
});
minus.addEventListener("click", ()=> {
  if (a>1){
  a--;
  num.innerText = a;}
});
