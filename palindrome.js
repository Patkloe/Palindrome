function palindrome(){
var new1 = "";
var g = prompt(" votre charactere :");
let size = g.length;
 if(size === 1){
    alert("Palindrome de taille 1");
    return g;
 }
 else{
      for(var i = size - 1 ; i >= 0; i--){
        new1 = new1 + g[i];
   }
       if(new1 === g)
          alert("palindrome");
       else
          alert("Not Palindrome");
 }
return new1;
}
palindrome();
