var A; 
var B; 
var C; 
var D; 
var E;
var a; 
var b; 
var c; 
var d; 
var e;
var vocabulary={
    english_words:function(){
        A=document.getElementById("1").value;
        B=document.getElementById("2").value;
        C=document.getElementById("3").value;
        D=document.getElementById("4").value;
        E=document.getElementById("5").value;
        alert(A+B+C+D+E);
        
        
    },
    polish_words:function(){        
        a=document.getElementById("a").value;
        b=document.getElementById("b").value;
        c=document.getElementById("c").value;
        d=document.getElementById("d").value;
        e=document.getElementById("e").value;
        alert(a+b+c+d+e);
    },
    sprawdzacz:function(){
        /*
        var x;
        x=Math.floor(Math.random()*A+E);
        document.getElementById("div_input").innerHTML=x;
        alert(x);
        */

       var div = document.createElement("kupa");
       div.style.width = "100%";
       div.style.height = "100%";
       div.style.color = "white";
       div.innerHTML = A;
       document.getElementById("main").appendChild(div);
    },
}