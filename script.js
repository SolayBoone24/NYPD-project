
let data, info, leftPanel;

async function init(){
  let link = "https://data.cityofnewyork.us/resource/uip8-fykc.json?$limit=200";
   info = await fetch(link);
  data = await info.json();
  
  let leftPane1 = document.getElementById("leftPane1");
  let build = "";

  for(let i = 0; i < data.length; i++){
    let arrest = data[i];
	let lat = arrest.latitude;
	let lon = arrest.longitude;
    build += `<div class="fitted card">`;
	build += `     <p>Reason of arrest: <h3>${arrest.pd_desc}</h3>`;
	build += `     <h4>Reason: ${arrest.ofns_desc}</h4>`;
    build += `     <p>Race: ${arrest.perp_race}</p>`;    
	build += `	   <hr>`;
	build += `     <p>borough: ${arrest.arrest_boro}</p>`;
	


	if(lat && lon){
        build += `<input type='button' value='Map' onclick="showMap( ${lat},${lon} )">`;
    }
   build += `</div>`;
  }
  leftPane1.innerHTML = build; 
}
	  
  
  
  



function filterByBoro(){
	let boro = document.getElementById("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
    let arrest = data[i];
	if (arrest.arrest_boro == boro){		
		build += `<div class="fitted card">`;
		build += `     <p>Reason of arrest: <h3>${arrest.pd_desc}</h3>`;
		build += `     <h4>Reason: ${arrest.ofns_desc}</h4>`;
		build += `     <p>Race: ${arrest.perp_race}</p>`;    
		build += `	   <hr>`;
		build += `     <p>borough: ${arrest.arrest_boro}</p>`;
		
		if(arrest.latitude  && arrest.longitude){
			build += `<input type='button' value='Map' onclick="showMap( ${arrest.latitude},${arrest.longitude} )">`;
		}
		build += `</div>`;
	}
  }
  leftPane1.innerHTML = build; 
}
  
  
  
 

