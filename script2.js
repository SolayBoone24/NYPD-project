let data, info;

async function init(){
  let link = "https://data.cityofnewyork.us/resource/uip8-fykc.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function crimesByBorough(){

	let   wh= 0,   bh= 0,   b= 0,   ap= 0
  

	for(let i = 0; i < data.length; i++){
		let arrest2 = data[i];
		if(arrest2.perp_race == "WHITE HISPANIC"){
		  wh++;
		}else if(arrest2.perp_race == "BLACK HISPANIC"){
		  bh++;
		}else if(arrest2.perp_race == "BLACK"){
		  b++;
		}else if(arrest2.perp_race == "ASIAN PACIFIC ISLANDER"){
		  ap++;
		}
	  }	


let chartData = [
    ["WHITE HISPANIC",wh],
    ["BLACK HISPANIC",bh],
    ["BLACK",b],
    ["ASIAN PACIFIC ISLANDER",ap],

  ];
  

  let chartType = document.getElementById("chartType").value;

  
  
    displayChart(chartData,"chart",chartType);
}

function descriptions(){
	let re=0, tf=0, wp=0, tu=0, f=0;
  
	for(let i = 0; i < data.length; i++){
		let arrest2 = data[i];
		if(arrest2.ofns_desc == "VEHICLE AND TRAFFIC LAWS"){
		  re++;
		}else if(arrest2.ofns_desc == "SEX CRIMES"){
		  tf++;
		}else if(arrest2.ofns_desc == "ROBBERY"){
		  wp++;
		}else if(arrest2.ofns_desc == "PETIT LARCENY"){
		  tu++;
		}else if(arrest2.ofns_desc == "FORGERY"){
		  f++;
		}
	  }	


let chartData = [
    ["VEHICLE AND TRAFFIC LAWS",re],
    ["SEX CRIMES",tf],
    ["ROBBERY",wp],
    ["PETIT LARCENY",tu],
    ["FORGERY",f]
  ];
  

  let chartType = document.getElementById("chartType").value;

  
  
    displayChart(chartData,"chart",chartType);
}
	
	
	


function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}