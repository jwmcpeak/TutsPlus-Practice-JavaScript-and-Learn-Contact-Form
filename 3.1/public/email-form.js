(function(msg){
    let form = document.getElementById('contact-form');
    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let message = document.getElementById('message');
    let button = document.getElementById('submit-button');

    form.setAttribute('novalidate', true);

    let validationProps = [
        'valueMissing',
        'typeMismatch'
    ];

    function getErrorMessage(element) {
        for (let ii = 0; ii < validationProps.length; ii++) {
            let prop = validationProps[ii];

            if (element.validity[prop]) {
                return element.getAttribute('data-valerror-' + prop);
            }
        }

        return 'Unknown error.';
    }

    function validate(element) {
        let isValid = element.validity.valid;

        if (isValid) {
            msg.validation(element.id, '');

            return true;
        }

        msg.validation(element.id, getErrorMessage(element));
        return false;
    }

    function validateAll() {
        let results = [].map.call(form.elements, validate);

        return results.every(function(value) { return value === true});
    }

    function send() {
        let url = form.getAttribute('action');
        // return fetch(url, {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: name.value,
        //         email: email.value,
        //         message: message.value
        //     })
        // });

        return fetch(url);
    }


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        button.setAttribute('disabled', true);

        if (!validateAll()) {
            button.removeAttribute('disabled');
        } else {
            send().then(function(res) {
                if (!res.ok) {
                    throw new Error('Network response was ' + res.status);
                }


                msg.info('Thank you for your message');
                msg.freeze();
            }).catch(function(err) {
                msg.appError(err);
                button.removeAttribute('disabled');
            });
        }
    });

    [].forEach.call(form.elements, function(element) {
        if (element.tagName.toLowerCase() === 'button') {
            return;
        }

        element.addEventListener('input', function(e) {
            validate(e.target);
        });

        element.addEventListener('focus', function(e) {
            msg.info(e.target.getAttribute('data-info'));
        });

        element.addEventListener('blur', function(e) {
            msg.info('');
        });

    });

    
    
})(messagePane);


