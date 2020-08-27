
function yes()
{

 var v=new Date();
 var h= v.getHours();
 var m=v.getMinutes();
 var s=v.getSeconds();

 if(s<10)
 {
 	s="0"+s;
 }
 if(m<10)
 {
 	m="0"+m;
 }
 if(h<10)
 {
 	h="0"+h;
 }


  document.getElementById("demo").innerHTML=h+":"+m+":"+s;
  var t=setTimeout(yes,500);
}
