function fotoGetir() {
    const city = document.getElementById("cityinput").value;
    const foto = document.getElementById("foto");

   
    const fotoURL = "" + city + "" + havapraqnozu + ""; 

    fetch(fotoURL)
      .then(response => response.json())
      .then(data => {
        
        const fotoURL = data.urls.regular;
        const fotoHTML = "" + fotoURL + "";
        foto.innerHTML = fotoHTML;
      })
      .catch(error => {
       
        foto.innerHTML = "<p>foto yoxdur";
      });
  }


  function getir() {
    const city = document.getElementById("cityinput").value;
    const foto = document.getElementById("foto");
    const havapraqnozu = document.getElementById("havapraqnozu");
  
    
    const cityUrl = ""; 
    const havaDurumuURL = "" + sehir + "";
  
    fetch(havaDurumuURL)
      .then(response => response.json())
      .then(data => {
        
        const havapraqnozu = data.weather[0].main;
        const havapraqnozu1 = data.weather[0].description;
  
        
        havapraqnozu.innerHTML = "<h3>" + sehir + "</h3>" +
         "<p>Havapraqnozu: " + havapraqnozu + "</p>" +
         "<p>havapraqnozu1: " + havapraqnozu1 + "</p>";
      })
      .catch(error => {
       
        havapraqnozu.innerHTML = "<p>hava praqnozu gostermir.</p>";
      });
  
    
    const fotoURL = "" + sehir + ""; 

    }

  