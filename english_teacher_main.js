var ps1='goes';
var ps2='-';
var ps3="don't";
var ps4='does';
var ps5="don't";
var pas1='-';
var pas2='was';
var pas3="wasn't";
var pas4='were';
var pas5="weren't't";
var pas6='did';
var pas7="didn't";
var fs1='-';
var fs2='will';
var fs3='will not'
var fs4='will be';
var fs5='will be not';
var psIndex=0;
var pc1='am going';
var pc2='is going';
var pc3='am not watching';
var pc4="isn't reading";
var pc5="isn't standing";
var pac1="was taking";
var pac2="was getting";
var pac3="were having";
var pac4="was getting";
var pac5="was";
var pac6="dreaming";
var fc1='will be learning';
var fc2='will be cleaning';
var fc3='will';
var fc4='doing';
var fc5='will be not raining';
var fc6='will be not jogging';
var pp1='have found';
var pp2='has closed';
var pp3="hasn't started";
var pp4='has taken';
var pp5='have';
var pp6='changed';
var pap1='had washed';
var pap2='left';
var pap3='had invited';
var pap4='went';
var pap5='has planted';
var pap6='watered';
var pap7='has';
var pap8='bought';
var pap9="hasn't bought";



function display_function(){
    //displaying buttons
    var button_3 = document.getElementsByClassName('button_3');
    for(let i=0; i<button_3.length; i++){
        button_3[i].style.opacity='0';
        button_3[i].style.display='none';
    }
    //displaying header
    var header_pasS=document.getElementById('header');
    header_pasS.style.opacity='0'; 
    header_pasS.style.display='none';
}
function show_function(){
    //stling second header
var header_present_simple_2=document.getElementById("header_present_simple");
header_present_simple_2.style.opacity='100';
header_present_simple_2.style.width='100%';
header_present_simple_2.style.marginbottom='10%';
header_present_simple_2.style.fontSize='40px';
header_present_simple_2.style.color='brown';
header_present_simple_2.style.marginTop='0px';
}

function present_simple(){
    //styling check button
    var check_it=document.getElementById('check_it');
    check_it.style.width='50%';
    check_it.style.height='100%';
    check_it.style.opacity='100';
    check_it.style.marginTop='25%';
    check_it.style.marginLeft='0%';
    check_it.style.marginRight='0%';

    var check_it_2=document.getElementById('check_it_2');
    check_it_2.style.display='none';

    //styling sentence in english
    var ps=document.getElementById('present_simple');
    ps.style.opacity='100';
    ps.style.width='2%';
    ps.style.float='left';
    ps.style.width='50%';
    ps.style.marginLeft='50%';
    ps.style.fontSize='30px';
    ps.style.marginTop='10%';
    ps.style.color='white';
    ps.style.textShadow='3px 3px black';
    //styling sentence in polish
    var tl=document.getElementById('translate');
    tl.style.opacity='100';
    tl.style.float='left';
    tl.style.width='50%';
    tl.style.height='35px';
    tl.style.fontSize='30px';
    tl.style.marginTop='-2%';
    tl.style.marginLeft='0';
    tl.style.color='white';
    tl.style.textShadow='3px 3px black';    
}
function past_simple(){
     //styling sentence in english
     var pass=document.getElementById('past_simple');
     pass.style.opacity='100';
     pass.style.width='2%';
     pass.style.float='left';
     pass.style.width='50%';
     pass.style.marginLeft='50%';
     pass.style.fontSize='30px';
     pass.style.marginTop='10%';
     pass.style.color='white';
     pass.style.textShadow='3px 3px black';
     //styling sentence in polish
     var tl_2=document.getElementById('translate_2');
     tl_2.style.opacity='100';
     tl_2.style.float='left';
     tl_2.style.width='50%';
     tl_2.style.height='35px';
     tl_2.style.fontSize='30px';
     tl_2.style.marginTop='-2%';
     tl_2.style.marginLeft='0';
     tl_2.style.color='white';
     tl_2.style.textShadow='3px 3px black';   

//styling check button
var check_it=document.getElementById('check_it_2');
check_it.style.width='100%';
check_it.style.height='100%';
check_it.style.opacity='100';
check_it.style.marginTop='30%';
check_it.style.marginLeft='0%';
check_it.style.marginRight='0%';
}
function future_simple(){
     //styling sentence in english
     var ps=document.getElementById('future_simple');
     ps.style.opacity='100';
     ps.style.width='2%';
     ps.style.float='left';
     ps.style.width='50%';
     ps.style.marginLeft='50%';
     ps.style.fontSize='30px';
     ps.style.marginTop='10%';
     ps.style.color='white';
     ps.style.textShadow='3px 3px black';
     //styling sentence in polish
     var tl=document.getElementById('translate_3');
     tl.style.opacity='100';
     tl.style.float='left';
     tl.style.width='50%';
     tl.style.height='35px';
     tl.style.fontSize='30px';
     tl.style.marginTop='-2%';
     tl.style.marginLeft='0';
     tl.style.color='white';
     tl.style.textShadow='3px 3px black';   

    //styling check_it_3 button
    var check_it=document.getElementById('check_it_3');
    check_it.style.width='100%';
    check_it.style.height='100%';
    check_it.style.opacity='100';
    check_it.style.marginTop='25%';
    check_it.style.marginLeft='0%';
    check_it.style.marginRight='0%';
}
function present_continues(){ 
    //styling check button
    var check_it=document.getElementById('check_it_4');
    check_it.style.width='100%';
    check_it.style.height='100%';
    check_it.style.opacity='100';
    check_it.style.marginTop='27%';
    check_it.style.marginLeft='0%';
    check_it.style.marginRight='0%';

    var check_it_2=document.getElementById('check_it_2');
    check_it_2.style.display='none';
    var check_it=document.getElementById('check_it');
    check_it.style.display='none';
    var check_it_3=document.getElementById('check_it_3');
    check_it_3.style.display='none';

     //styling sentence in english
     var prc=document.getElementById('present_continues');
     prc.style.opacity='100';
     prc.style.width='2%';
     prc.style.float='left';
     prc.style.width='50%';
     prc.style.marginLeft='50%';
     prc.style.fontSize='30px';
     prc.style.marginTop='10%';
     prc.style.color='white';
     prc.style.textShadow='3px 3px black';
    
     //styling sentence in polish
     var tl_2=document.getElementById('translate_4');
     tl_2.style.opacity='100';
     tl_2.style.float='left';
     tl_2.style.width='50%';
     tl_2.style.height='35px';
     tl_2.style.fontSize='30px';
     tl_2.style.marginTop='-2%';
     tl_2.style.marginLeft='0';
     tl_2.style.color='white';
     tl_2.style.textShadow='3px 3px black';      

}
function past_continues(){ 
    //styling check button
    var check_it=document.getElementById('check_it_5');
    check_it.style.width='100%';
    check_it.style.height='100%';
    check_it.style.opacity='100';
    check_it.style.marginTop='25%';
    check_it.style.marginLeft='0%';
    check_it.style.marginRight='0%';

    var check_it_2=document.getElementById('check_it_2');
    check_it_2.style.display='none';
    var check_it=document.getElementById('check_it');
    check_it.style.display='none';
    var check_it_3=document.getElementById('check_it_3');
    check_it_3.style.display='none';
    var check_it_4=document.getElementById('check_it_4');
    check_it_4.style.display='none';

     //styling sentence in english
     var pac=document.getElementById('past_continues');
     pac.style.opacity='100';
     pac.style.width='2%';
     pac.style.float='left';
     pac.style.width='50%';
     pac.style.marginLeft='50%';
     pac.style.fontSize='30px';
     pac.style.marginTop='10%';
     pac.style.color='white';
     pac.style.textShadow='3px 3px black';
    
     //styling sentence in polish
     var tl_5=document.getElementById('translate_5');
     tl_5.style.opacity='100';
     tl_5.style.float='left';
     tl_5.style.width='50%';
     tl_5.style.height='35px';
     tl_5.style.fontSize='30px';
     tl_5.style.marginTop='-2%';
     tl_5.style.marginLeft='0';
     tl_5.style.color='white';
     tl_5.style.textShadow='3px 3px black';      

}
function future_continues(){
 //styling check button
 var check_it_6=document.getElementById('check_it_6');
 check_it_6.style.width='100%';
 check_it_6.style.height='100%';
 check_it_6.style.opacity='100';
 check_it_6.style.marginTop='25%';
 check_it_6.style.marginLeft='0%';
 check_it_6.style.marginRight='0%';

 var check_it_2=document.getElementById('check_it_2');
 check_it_2.style.display='none';
 var check_it=document.getElementById('check_it');
 check_it.style.display='none';
 var check_it_3=document.getElementById('check_it_3');
 check_it_3.style.display='none';
 var check_it_4=document.getElementById('check_it_4');
 check_it_4.style.display='none';
 var check_it_5=document.getElementById('check_it_5');
 check_it_5.style.display='none';

  //styling sentence in english
  var fuc=document.getElementById('future_continues');
  fuc.style.opacity='100';
  fuc.style.width='2%';
  fuc.style.float='left';
  fuc.style.width='50%';
  fuc.style.marginLeft='50%';
  fuc.style.fontSize='30px';
  fuc.style.marginTop='10%';
  fuc.style.color='white';
  fuc.style.textShadow='3px 3px black';
 
  //styling sentence in polish
  var tl_6=document.getElementById('translate_6');
  tl_6.style.opacity='100';
  tl_6.style.float='left';
  tl_6.style.width='50%';
  tl_6.style.height='35px';
  tl_6.style.fontSize='30px';
  tl_6.style.marginTop='-2%';
  tl_6.style.marginLeft='0';
  tl_6.style.color='white';
  tl_6.style.textShadow='3px 3px black';      

}
function present_perfect(){
 //styling check button
 var check_it_7=document.getElementById('check_it_7');
 check_it_7.style.width='100%';
 check_it_7.style.height='100%';
 check_it_7.style.opacity='100';
 check_it_7.style.marginTop='25%';
 check_it_7.style.marginLeft='0%';
 check_it_7.style.marginRight='0%';

 var check_it_2=document.getElementById('check_it_2');
 check_it_2.style.display='none';
 var check_it=document.getElementById('check_it');
 check_it.style.display='none';
 var check_it_3=document.getElementById('check_it_3');
 check_it_3.style.display='none';
 var check_it_4=document.getElementById('check_it_4');
 check_it_4.style.display='none';
 var check_it_5=document.getElementById('check_it_5');
 check_it_5.style.display='none';
 var check_it_6=document.getElementById('check_it_6');
 check_it_6.style.display='none';

  //styling sentence in english
  var prp=document.getElementById('present_perfect');
  prp.style.opacity='100';
  prp.style.width='2%';
  prp.style.float='left';
  prp.style.width='50%';
  prp.style.marginLeft='50%';
  prp.style.fontSize='30px';
  prp.style.marginTop='10%';
  prp.style.color='white';
  prp.style.textShadow='3px 3px black';
 
  //styling sentence in polish
  var tl_7=document.getElementById('translate_7');
  tl_7.style.opacity='100';
  tl_7.style.float='left';
  tl_7.style.width='50%';
  tl_7.style.height='35px';
  tl_7.style.fontSize='30px';
  tl_7.style.marginTop='-2%';
  tl_7.style.marginLeft='0';
  tl_7.style.color='white';
  tl_7.style.textShadow='3px 3px black';      

}
function past_perfect(){
    //styling check button
    var check_it_8=document.getElementById('check_it_8');
    check_it_8.style.width='100%';
    check_it_8.style.height='100%';
    check_it_8.style.opacity='100';
    check_it_8.style.marginTop='32%';
    check_it_8.style.marginLeft='0%';
    check_it_8.style.marginRight='0%';
   
    var check_it_2=document.getElementById('check_it_2');
    check_it_2.style.display='none';
    var check_it=document.getElementById('check_it');
    check_it.style.display='none';
    var check_it_3=document.getElementById('check_it_3');
    check_it_3.style.display='none';
    var check_it_4=document.getElementById('check_it_4');
    check_it_4.style.display='none';
    var check_it_5=document.getElementById('check_it_5');
    check_it_5.style.display='none';
    var check_it_6=document.getElementById('check_it_6');
    check_it_6.style.display='none';
    var check_it_7=document.getElementById('check_it_7');
    check_it_7.style.display='none';
   
     //styling sentence in english
     var pap=document.getElementById('past_perfect');
     pap.style.opacity='100';
     pap.style.width='2%';
     pap.style.float='left';
     pap.style.width='50%';
     pap.style.marginLeft='50%';
     pap.style.fontSize='30px';
     pap.style.marginTop='10%';
     pap.style.color='white';
     pap.style.textShadow='3px 3px black';
    
     //styling sentence in polish
     var tl_8=document.getElementById('translate_8');
     tl_8.style.opacity='100';
     tl_8.style.float='left';
     tl_8.style.width='50%';
     tl_8.style.height='35px';
     tl_8.style.fontSize='30px';
     tl_8.style.marginTop='-2%';
     tl_8.style.marginLeft='0';
     tl_8.style.color='white';
     tl_8.style.textShadow='3px 3px black';      
   
   }

function sprawdzacz_grammar_pas(){
    var valueSelect = document.getElementById('one');   
    if(valueSelect.value==pas2){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('two');
    if(valueSelect_2.value==pas7){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('three');
    if(valueSelect_3.value==pas4){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('four');
    if(valueSelect_4.value==pas6){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('five');
    if(valueSelect_5.value==pas3){
        valueSelect_5.style.color='#7CFC00';
        psIndex++;
    }
    else{
        valueSelect_5.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate_2');
    tl.style.display='none';
    var ps=document.getElementById('past_simple');
    ps.style.display='none';
    var check=document.getElementById('check_it_2');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_ps(){
    var valueSelect = document.getElementById('jeden');   
    if(valueSelect.value==ps1){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa');
    if(valueSelect_2.value==ps2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy');
    if(valueSelect_3.value==ps3){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery');
    if(valueSelect_4.value==ps4){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć');
    if(valueSelect_5.value==ps5){
        valueSelect_5.style.color='#7CFC00';
        psIndex++;
    }
    else{
        valueSelect_5.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate');
    tl.style.display='none';
    var ps=document.getElementById('present_simple');
    ps.style.display='none';
    var check=document.getElementById('check_it');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_fs(){
    var valueSelect = document.getElementById('jeden_fs');   
    if(valueSelect.value==fs4){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa_fs');
    if(valueSelect_2.value==fs2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy_fs');
    if(valueSelect_3.value==fs5){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery_fs');
    if(valueSelect_4.value==fs2){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć_fs');
    if(valueSelect_5.value==fs2){
        valueSelect_5.style.color='#7CFC00';
        psIndex++;
    }
    else{
        valueSelect_5.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate_3');
    tl.style.display='none';
    var ps=document.getElementById('future_simple');
    ps.style.display='none';
    var check=document.getElementById('check_it');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_pc(){
    var valueSelect = document.getElementById('jeden_pc');   
    if(valueSelect.value==pc1){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa_pc');
    if(valueSelect_2.value==pc2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy_pc');
    if(valueSelect_3.value==pc3){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery_pc');
    if(valueSelect_4.value==pc4){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć_pc');
    if(valueSelect_5.value==pc5){
        valueSelect_5.style.color='#7CFC00';
        psIndex++;
    }
    else{
        valueSelect_5.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate_4');
    tl.style.display='none';
    var ps=document.getElementById('present_continues');
    ps.style.display='none';
    var check=document.getElementById('check_it_4');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_pac(){
    var valueSelect = document.getElementById('jeden_pac');   
    if(valueSelect.value==pac1){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa_pac');
    if(valueSelect_2.value==pac2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy_pac');
    if(valueSelect_3.value==pac3){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery_pac');
    if(valueSelect_4.value==pac4){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć_pac');
    if(valueSelect_5.value==pac5){
        valueSelect_5.style.color='#7CFC00';
        psIndex= psIndex+0.5;
    }
    else{
        valueSelect_5.style.color='red';
    }
    var valueSelect_6=document.getElementById('sześć_pac');
    if(valueSelect_6.value==pac6){
        valueSelect_6.style.color='#7CFC00';
        psIndex= psIndex+0.5;  
    }
    else{
        valueSelect_6.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate_5');
    tl.style.display='none';
    var ps=document.getElementById('past_continues');
    ps.style.display='none';
    var check=document.getElementById('check_it_5');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_fc(){
    var valueSelect = document.getElementById('jeden_fc');   
    if(valueSelect.value==fc1){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa_fc');
    if(valueSelect_2.value==fc2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy_fc');
    if(valueSelect_3.value==fc3){
        valueSelect_3.style.color='#7CFC00';
        psIndex=psIndex + 0.5;    
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery_fc');
    if(valueSelect_4.value==fc4){
        valueSelect_4.style.color='#7CFC00';
        psIndex=psIndex + 0.5;   
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć_fc');
    if(valueSelect_5.value==fc5){
        valueSelect_5.style.color='#7CFC00';
        psIndex++;
    }
    else{
        valueSelect_5.style.color='red';
    }
    var valueSelect_6=document.getElementById('sześć_fc');
    if(valueSelect_6.value==fc6){
        valueSelect_6.style.color='#7CFC00';
        psIndex++;
    }
    else{
        valueSelect_6.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate_6');
    tl.style.display='none';
    var ps=document.getElementById('future_continues');
    ps.style.display='none';
    var check=document.getElementById('check_it_6');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_pp(){
    var valueSelect = document.getElementById('jeden_pp');   
    if(valueSelect.value==pp1){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa_pp');
    if(valueSelect_2.value==pp2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy_pp');
    if(valueSelect_3.value==pp3){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;   
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery_pp');
    if(valueSelect_4.value==pp4){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;   
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć_pp');
    if(valueSelect_5.value==pp5){
        valueSelect_5.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_5.style.color='red';
    }
    var valueSelect_6=document.getElementById('sześć_pp');
    if(valueSelect_6.value==pp6){
        valueSelect_6.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_6.style.color='red';
    }

    //clearing the bord
    var tl=document.getElementById('translate_7');
    tl.style.display='none';
    var ps=document.getElementById('present_perfect');
    ps.style.display='none';
    var check=document.getElementById('check_it_7');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}
function sprawdzacz_grammar_pap(){
    var valueSelect = document.getElementById('jeden_pap');   
    if(valueSelect.value==pap1){
        valueSelect.style.color='#7CFC00';
        psIndex++;
      }
      else{
        var translate_background=document.getElementsByClassName('translate_background')  ;
        valueSelect.style.color='red';
      }
    
    var valueSelect_2=document.getElementById('dwa_pap');
    if(valueSelect_2.value==pap2){
        valueSelect_2.style.color='#7CFC00';
        psIndex++;    
    }
    else{
        valueSelect_2.style.color='red';
    }
    
    var valueSelect_3=document.getElementById('trzy_pap');
    if(valueSelect_3.value==pap3){
        valueSelect_3.style.color='#7CFC00';
        psIndex++;   
    }
    else{
        valueSelect_3.style.color='red';
    }
    
    var valueSelect_4=document.getElementById('cztery_pap');
    if(valueSelect_4.value==pap4){
        valueSelect_4.style.color='#7CFC00';
        psIndex++;   
    }
    else{
        valueSelect_4.style.color='red';
    }
    
    var valueSelect_5=document.getElementById('pięć_pap');
    if(valueSelect_5.value==pap5){
        valueSelect_5.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_5.style.color='red';
    }
    var valueSelect_6=document.getElementById('sześć_pap');
    if(valueSelect_6.value==pap6){
        valueSelect_6.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_6.style.color='red';
    }    
    var valueSelect_7=document.getElementById('siedem_pap');
    if(valueSelect_7.value==pap7){
        valueSelect_7.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_7.style.color='red';
    }
    var valueSelect_8=document.getElementById('osiem_pap');
    if(valueSelect_8.value==pap8){
        valueSelect_8.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_8.style.color='red';
    }
    var valueSelect_9=document.getElementById('dziewięć_pap');
    if(valueSelect_9.value==pap9){
        valueSelect_9.style.color='#7CFC00';
        psIndex=psIndex+0.5;
    }
    else{
        valueSelect_9.style.color='red';
    }



    //clearing the bord
    var tl=document.getElementById('translate_8');
    tl.style.display='none';
    var ps=document.getElementById('past_perfect');
    ps.style.display='none';
    var check=document.getElementById('check_it_8');
    check.style.display='none';

    var wynik=document.getElementById('wynik');
    wynik.innerText= psIndex*20 + '%';
    wynik.style.height='50px';
    wynik.style.width=psIndex*10 + '%';
    wynik.style.opacity='150';
    wynik.style.color='white';
    wynik.style.textShadow='3px 3px black';
    wynik.style.fontSize='50px';
    wynik.style.border='solid 3px black'
    wynik.style.background='#7CFC00';
    wynik.style.textAlign = "center";

    var header_present_simple_znikacz=document.getElementById('header_present_simple');
    header_present_simple_znikacz.style.display='none';

    var tw=document.getElementById('tw');
    tw.style.opacity='100';
    tw.style.color='white';
    tw.style.textShadow='3px 3px black';
    tw.style.fontSize='50px';
    tw.style.marginBottom='5%';

    var back=document.getElementById('back');
    back.style.opacity='100';
    back.style.width='100%';
    back.style.height='100%';
    back.style.opacity='100';
    back.style.marginTop='24%';
    back.style.marginLeft='0%';
    back.style.marginRight='0%';
}