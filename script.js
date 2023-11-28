let mili = 0,min=0,hr = 0, sec = 0, timer = false;
const Start = (()=>{
    timer = true;
    fun();
})
const Stop = (()=>{
    timer = false;
    fun();
})
const Reset = (()=>{
    location.reload();
})
const fun = (()=>{
    if(timer == true){
        mili = mili+1;
        if(mili == 60){
            sec = sec + 1;
            mili=0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
        }
        setTimeout("fun()",10);
        document.getElementById("mili").innerHTML = mili;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("min").innerHTML = min;
    }
})