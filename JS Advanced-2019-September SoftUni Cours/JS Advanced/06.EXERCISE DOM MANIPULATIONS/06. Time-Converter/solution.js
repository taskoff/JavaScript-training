function attachEventsListeners() {
    const btns = document.querySelectorAll('input[type=button]');
    for (const btn of btns) {
        btn.addEventListener('click', convertor);
    }

    function convertor(e) {
        const currentBtn = e.currentTarget;
        const currentValue = Number(currentBtn.previousElementSibling.value);
        const daysInput = document.getElementById('days');
        const hoursInput = document.getElementById('hours');
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');
        
        const btnsConvertor = {
            daysBtn: (e) => {
                hoursInput.value =  e*24;
                minutesInput.value =  e*1440;
                secondsInput.value =  e*86400; 
                    },
            hoursBtn: (e) => {
                daysInput.value =  e/24;
                minutesInput.value =  e*60;
                secondsInput.value =  e*3600; 
                  },
            minutesBtn: (e) => {
                hoursInput.value =  e/60;
                daysInput.value =  e/1440;
                secondsInput.value =  e*60; 
                },
            secondsBtn: (e) => {
                hoursInput.value =  e/3600;
                minutesInput.value =  e/60;
                daysInput.value =  e/86400; 
                  }
            
        }

        btnsConvertor[currentBtn.id](currentValue)
        
    }
}