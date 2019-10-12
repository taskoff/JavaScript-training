function attachEventsListeners() {
    let inputs = document.querySelectorAll('input[type = text]');
    for (let input of inputs) {
        input.addEventListener('blur', takeTypeAndValue)
    }
    
    let typeOne = '';
    let valueOne = 0;
    function takeTypeAndValue(e) {
        let currentInput = e.currentTarget;
        typeOne = currentInput.id;
        valueOne = Number(currentInput.value);
        // console.log(type, value)
    }

    let btns = document.querySelectorAll('input[type = button]');
    for (const btn of btns) {
        btn.addEventListener('click', convertor);
    }

    const convertValue = {
        days: {
            hoursBtn: (d) => d*24,
            minutesBtn: (d) => d*1440,
            secondsBtn: (d) => d*86400 
            },
        hours: {
            daysBtn: (h) => h/24,
            minutesBtn: (h) => h*60,
            secondsBtn: (h) => h*3600 
            },
        minutes: {
            daysBtn: (m) => m/1440,
            hoursBtn: (m) => m/60,
            secondsBtn: (m) => m*60 
            },
        seconds: {
            daysBtn: (s) => s/86400,
            hoursBtn: (s) => s/3600,
            minutesBtn: (s) => s/60 
            } 
    }
    function convertor(e) {
        let currentBtn = e.currentTarget;
        let btnValue = currentBtn.id;
        // currentBtn.previousElementSibling.value = convertValue[typeOne][btnValue](valueOne)
        let idToInput = btnValue.substr(0, btnValue.length - 3,);
        let newValue = convertValue[typeOne][btnValue](valueOne);
        document.querySelector(`#${idToInput}`).value = newValue;
        console.log(newValue)
    }
}