function lockedProfile() {
    const btns = document.querySelectorAll('button');

    for (const btn of btns) {
        btn.addEventListener('click', showAndHideInfo);
        
    }
    
    function showAndHideInfo(e) {
        
        const currentBtn = e.currentTarget
        const user = currentBtn.previousElementSibling.id.substr(0, 5);
        const chekbox = document.querySelectorAll(`input[name = ${user}Locked]`);
        const hiddenInfo = document.querySelector(`#${user}HiddenFields`);

        if (chekbox[1].checked && currentBtn.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            currentBtn.textContent = 'Hide it'
        } else if (chekbox[1].checked && currentBtn.textContent === 'Hide it') {
            hiddenInfo.style.display = 'none';
            currentBtn.textContent = 'Show more'
        }
    }
    
    
}