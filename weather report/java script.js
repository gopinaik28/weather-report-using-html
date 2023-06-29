<body>
    <div class="container-fluid">



            <section class="main">


    
            <section class="inputs">
                <input type="text" placeholder="Enter any city..." id="cityinput">
                <input type="submit" value="Submit" id="add">
            <button placeholder="submit" id="add"></button>
            </section>

     
            <section class="display">
                <div class="wrapper">
                    <h2 id="cityoutput"></h2>
                    <p id="description"></p>
                    <p id="temp"></p>
                    <p id="wind"></p>

                </div>
            </section>
            </section>

    </div>

    <script>

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

 
apik = "3045dd712ffe6e702e3245525ac7fa38"


function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){


        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())


        .then(data => {


            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

        })

        .catch(err => alert('You entered Wrong city name'))
    })
    </script>
</body>
</html>

