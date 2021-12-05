setInterval(() => {
    d = new Date();
  let  htime = d.getHours();
  let  mtime = d.getMinutes();
   let stime = d.getSeconds();
  let   hrotation = (30*htime) + (mtime/2);
  let   mrotation = 6*mtime;
  let  srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);

setInterval(() =>{
  let dt = new Date();
  let hr=dt.getHours();
  let min=dt.getMinutes();
  let sec=dt.getSeconds();
  if (sec<10)
  {
    document.getElementById('time').innerHTML=`${hr}:${min}:0${sec}`;
  }
  else
  document.getElementById('time').innerHTML=`${hr}:${min}:${sec}`;
 },1000);

function change()
{
  let clock = document.getElementById('clock');
  let container = document.getElementById('container');
  let btn = document.getElementById('btn');
  let h=document.getElementById('HE')
  if(clock.style.display!='none')
  {
    clock.style.display='none';
    container.style.display='block';
    document.body.style.background="black";
    h.innerHTML="DIGITAL CLOCK";
    h.style.color="white";
  }
  else
  {
   container.style.display='none';
   clock.style.display='block';
   document.body.style.background="white";
   h.innerHTML="ANALOG CLOCK";
   h.style.color="black";
  }
}
