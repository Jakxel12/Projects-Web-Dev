document.querySelector('input[type="text"]').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const cityName = document.querySelector('input[type="text"]').value;
      const apiKey = 'b7d62ddab78f6cbd6a2114407ca4f31c';
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const temp = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const icon = data.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  
          document.querySelector('.grade').innerText = `${temp} °C`;
          document.querySelector('.state').innerText = `${weatherDescription}`;
        })
        .catch(error => console.error('Error:', error));
    }
  });
  
  document.querySelector('.clear-click').addEventListener('click', clear);
  
  function clear() {
    document.querySelector('input[type="text"]').value='';
    document.querySelector('.grade').innerText = '';
    document.querySelector('.state').innerText = '';
  }