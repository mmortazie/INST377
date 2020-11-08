// Get saved data from sessionStorage
let title = "title"; // Your code here
let lat_max = "lat_max";
let lat_min = "lat_min";
let lon_max = "lon_max";
let lon_min = "lon_min";

// Set the corresponding <p> elements in the GetSessionData.html page with the values from above

const title = document.getElementById("title"); 
const lat_max = document.getElementById("lat_max");
const lat_min = document.getElementById("lat_min");
const lon_max = document.getElementById("lon_max");
const lon_min = document.getElementById("lon_min");

title.innerText = title;
lat_max.innerText = lax_max;
lat_min.innerText = lax_min;
lon_max.innerText = lon_max;
lon_min.innerText = lon_min;