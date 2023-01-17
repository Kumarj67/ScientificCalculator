var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',function(e){
        btntext=e.target.innerText;
        screen.value+=btntext;
        
});
}
function sin(){
    screen.value=Math.sin(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}
function tan(){
    screen.value=Math.tan(screen.value);
}
function sqrt(){
screen.value=Math.sqrt(screen.value,2);
}
function log(){
    screen.value=Math.log(screen.value);
}
function exp(){
    screen.value=2.718281828459045;
}
function pi(){
    screen.value=3.141592653589793238;

}
function fact(){
    var i,num,f;
    num=screen.value;
        f=1;
        for(i=1;i<=num;i++){
            f*=i;
        }
        i=i-1;
        screen.value=f;
        
}           
function pow(){
screen.value=Math.pow(screen.value,2);
}

function backspace(){
    screen.value=screen.value.substring(0,screen.value.length-1);
}