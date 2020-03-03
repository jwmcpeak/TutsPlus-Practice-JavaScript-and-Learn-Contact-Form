var messagePane = (function() {
    let infoOutput = document.getElementById('info-messages');
    let valOutput = document.getElementById('validation-messages');


    function setValidation(id, msg) {
        let el = document.getElementById(id);

        if (!el) {
            el = document.createElement('div');
            el.id = id;
            valOutput.appendChild(el);
        }

        el.innerHTML = msg;
        valOutput.classList.remove('d-none');
    }

    function clearValidation(id) {
        let el = document.getElementById(id);

        if (el) {
            valOutput.removeChild(el);
        }

        if (!valOutput.hasChildNodes()) {
            valOutput.classList.add('d-none');
        }
    }

    return {
        info(message) {
            infoOutput.innerHTML = message;

            let fn = message ? 'remove' : 'add';
            infoOutput.classList[fn]('d-none');
        },
        validation(id, msg) {
            let errId = 'msg-' + id;

            if (!msg) {
                clearValidation(errId);
            } else {
                setValidation(errId, msg);
            }
        }
    }
})();