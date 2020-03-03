var messagePane = (function() {
    let infoOutput = document.getElementById('info-messages');

    return {
        info(message) {
            infoOutput.innerHTML = message;
        }
    }
})();