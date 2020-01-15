
setInterval(function (){
	var date=new Date();
    var day=date.getDate();
    if (day<10){
        day='0'+day;
    }
    var mounth=date.getMonth()+1;
    if (mounth<10){
        mounth='0'+mounth;
    }
    var year=date.getFullYear();
    
    var hour=date.getHours();
    if (hour<10){
        hour='0'+hour;
    }
    var minute=date.getMinutes();
    if (minute<10){
        minute='0'+minute;
    }
    
    
    var second=date.getSeconds();
    if (second<10){
        second='0'+second;
    }
    var time = day+'.'+mounth+'.'+year+'  '+hour+'.'+minute+'.'+second;
	
	var p=document.getElementById('time');
	p.innerHTML=time;
} ,1000)





