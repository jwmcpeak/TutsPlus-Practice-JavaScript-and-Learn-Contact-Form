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
        return false;
    }


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        button.setAttribute('disabled', true);

        console.log('asdf');

        if (!validateAll()) {
            button.removeAttribute('disabled');
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


