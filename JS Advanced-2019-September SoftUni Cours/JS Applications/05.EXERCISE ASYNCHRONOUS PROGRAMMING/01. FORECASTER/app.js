function attachEvents() {

    let elements = {
        getWeatherBtn: document.getElementById('submit'),
        inputElement: document.getElementById('location'),
        currentDiv: document.getElementById('current'),
        forecastDiv: document.getElementById('forecast'),
        upcomingDiv: document.getElementById('upcoming'),
        contentDiv: document.getElementById('content')
    }

    let weatherCodes = {
        'Sunny': "☀",
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    }
    elements.getWeatherBtn.addEventListener('click', getWeather)

    function getWeather() {
        let location = elements.inputElement.value;

        let divForecast = document.querySelector('div.forecasts');
        removeDivIfExist(divForecast)
        
        let forecastInfoDiv = document.querySelector('div.forecast-info');
        removeDivIfExist(forecastInfoDiv)

        let errorTitle = document.querySelector('h1.error');
        removeDivIfExist(errorTitle)
        
        fetch('https://judgetests.firebaseio.com/locations.json')
        .then(response => response.json())
        .then(data => {
            let isCityExist = false;
            data.forEach(e => {
                if (e.name === location) {
                    isCityExist = true;
                    fetch(`https://judgetests.firebaseio.com/forecast/today/${e.code}.json`)
                    .then(response => response.json())
                    .then(data => {
                        createCurrentCondition(data);
                    })
                    .catch(err => handleError());

                    fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${e.code}.json`)
                    .then(response => response.json())
                    .then(data => createUpcomingCondition(data))
                    .catch(err => handleError())

                    elements.forecastDiv.style.display = 'block';
                }
                
            })
            if (isCityExist === false) {
                handleError()
            }
            
            elements.inputElement.value = '';
        })
        .catch(err => handleError())
    }
    function createNewHtmlElement(type, isClass, text) {
       
            let newElement = document.createElement(`${type}`);
       
        if (typeof isClass === "object") {
            newElement.classList.add(...isClass);
        } else if(typeof isClass === 'string'){
            newElement.classList.add(isClass);
        }
        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
    function createCurrentCondition(data) {
       
                        let locationSpan = createNewHtmlElement('span', 'forecast-data', data.name);
                        let degreesSpan = createNewHtmlElement('span', 'forecast-data', `${data.forecast.low}${weatherCodes.Degrees}/${data.forecast.high}${weatherCodes.Degrees}`)
                        let weatherSpan = createNewHtmlElement('span', 'forecast-data', data.forecast.condition);
                        let conditionSpan = createNewHtmlElement('span', 'condition');
                        elementAppendChild(conditionSpan, [locationSpan, degreesSpan, weatherSpan])
                        let symbolSpan = createNewHtmlElement('span', ['condition', 'symbol'], weatherCodes[data.forecast.condition]);
                        let forecastDiv = createNewHtmlElement('div', 'forecasts');
                        elementAppendChild(forecastDiv, [symbolSpan, conditionSpan]);
                        elements.currentDiv.appendChild(forecastDiv);
    }
    function createUpcomingCondition(data) {
        let divForecastInfo = createNewHtmlElement('div', 'forecast-info');
        data.forecast.forEach(e => {
           divForecastInfo.appendChild(createUpcomingSpan(e))
        })
        elements.upcomingDiv.appendChild(divForecastInfo);

        function createUpcomingSpan(data) {
            let upcomingSpan = createNewHtmlElement('span', 'upcoming');
            let symbolSpan = createNewHtmlElement('span', 'symbol', weatherCodes[data.condition]);
            let degreesSpan = createNewHtmlElement('span', 'forecast-data', `${data.low}${weatherCodes.Degrees}/${data.high}${weatherCodes.Degrees}`);
            let weatherSpan = createNewHtmlElement('span', 'forecast-data', data.condition);
            elementAppendChild(upcomingSpan, [symbolSpan, degreesSpan, weatherSpan]);
            return upcomingSpan;
        }
    }
    function elementAppendChild(div, arg) {
        arg.forEach(e=>{
            div.appendChild(e);
        })
    }
    function removeDivIfExist(div) {
        if (div) {
            div.parentNode.removeChild(div);
        }
    }
    function handleError() {

        let errorEl = createNewHtmlElement('h1', 'error', 'Error!');
        elements.contentDiv.appendChild(errorEl);
        elements.forecastDiv.style.display = 'none'
    }


   
}

attachEvents();