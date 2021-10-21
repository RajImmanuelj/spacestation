const head =document.querySelector('h3')
const long=document.getElementById('long')
var map = L.map('map').setView([0,0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var myIcon = L.icon({
  iconUrl: 'https://www.svgrepo.com/show/27888/satellite.svg',
  iconSize: [30, 70],
  
});
var pathIcon = L.icon({
  iconUrl: 'https://www.svgrepo.com/show/331860/dot.svg',
  iconSize: [30, 30],
  
});


let marker=L.marker([0,0],{icon: myIcon}).addTo(map)
 
const spacestationdetails=async ()=>{
  const res=await fetch('https://api.wheretheiss.at/v1/satellites/25544')
  const data=await res.json()
  const{latitude,longitude}=data
  console.log(latitude,longitude)
  marker.setLatLng([latitude,longitude])
  L.marker([latitude,longitude],{icon:pathIcon}).addTo(map)
  head.innerText=latitude
  long.innerText=longitude
}
setInterval(spacestationdetails,1000)
