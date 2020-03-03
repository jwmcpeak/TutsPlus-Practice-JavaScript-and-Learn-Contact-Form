(function(){
    let form = document.getElementById('contact-form');
    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let message = document.getElementById('message');
    let button = document.getElementById('submit-button');

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

        });

        element.addEventListener('focus', function(e) {

        });

        element.addEventListener('blur', function(e) {

        });

    });

    
    
})();


