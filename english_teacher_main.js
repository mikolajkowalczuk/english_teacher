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
var psIndex=0;

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
function present_simple(){
    //styling check button
    var check_it=document.getElementById('check_it');
    check_it.style.width='100%';
    check_it.style.height='100%';
    check_it.style.opacity='100';
    check_it.style.marginTop='25%';
    check_it.style.marginLeft='0%';
    check_it.style.marginRight='0%';

    var check_it_2=document.getElementById('check_it_2');
    check_it_2.style.display='none';
    //styling second header
    var header_present_simple=document.getElementById("header_present_simple");
    header_present_simple.style.opacity='100';
    header_present_simple.style.width='100%';
    header_present_simple.style.marginbottom='10%';
    header_present_simple.style.fontSize='40px';
    header_present_simple.style.color='brown';
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

//stling second header
var header_present_simple_2=document.getElementById("header_present_simple");
header_present_simple_2.style.opacity='100';
header_present_simple_2.style.width='100%';
header_present_simple_2.style.marginbottom='10%';
header_present_simple_2.style.fontSize='40px';
header_present_simple_2.style.color='brown';
//styling check button
var check_it=document.getElementById('check_it_2');
check_it.style.width='100%';
check_it.style.height='100%';
check_it.style.opacity='100';
check_it.style.marginTop='30%';
check_it.style.marginLeft='0%';
check_it.style.marginRight='0%';
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