function encodeAndDecodeMessages() {
    let textareas = document.querySelectorAll('textarea');
    const btns = document.querySelectorAll('button');
    btns[0].addEventListener('click', encodeAndSend);
    btns[1].addEventListener('click', decodeAndRead);

    function encodeAndSend() {
        textareas[1].value = textareas[0].value
                                            .split('')
                                            .map(e => String.fromCharCode(e.charCodeAt() + 1))
                                            .join('');
        textareas[0].value = '';
    }

    function decodeAndRead() {
        textareas[1].value = textareas[1].value
                                            .split('')
                                            .map(e => String.fromCharCode(e.charCodeAt() - 1))
                                            .join('');
    }
}