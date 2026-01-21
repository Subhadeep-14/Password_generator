let len=document.getElementById("length");
let lenValue=document.getElementById("lengthValue");
let button=document.getElementById("generate");
let pass=document.getElementById("password");


len.addEventListener("input",()=>{
    let val=len.value;
    lenValue.innerText=val;
});
button.addEventListener("click",()=>{
    let length=len.value;
    function generateRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&@!";
  let result = "";
  if(length==0){
    alert("Please select a length greater than 0");
  }
  for (let i = 0; i < length; i++) {
    
    const randomIndex = Math.floor(Math.random() * chars.length);
    
    result += chars.charAt(randomIndex);
  }
  return result;
}


const randomChars = generateRandomString(length);
pass.value=randomChars;
});
