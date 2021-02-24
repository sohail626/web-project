 var submitbtn=document.getElementById("submitbtn");
 const cityName=document.getElementById("cityname")
 const cityData=document.getElementById("city-data")
 const temp=document.getElementById("temp")
 const temstatus=document.getElementById("tem-status")
 
 

 const getInfo=async(event)=>{
     event.preventDefault()
     let cityVal=cityName.value;
     if (cityVal===""){
cityData.innerHTML="Please write city name"
     }
    
    else{
        try{ 
             let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ba43914af9301f346057a35bcadb29ce`
        const response=await fetch(url)
        const data=await response.json()
        const arrData=[data]
        temp.innerHTML=arrData[0].main.temp
        temstatus.innerHTML=arrData[0].weather[0].main;
        cityData.innerHTML=arrData[0].name;
        console.log(data)
    }
    catch{
        cityData.innerHTML="please enter name properly"
    }

      
    
  
    }
 }
 submitbtn.addEventListener("click",getInfo)
