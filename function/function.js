'use strict'

(function () {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()


document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

       let form = event.target;
        let isValid = form.checkValidity();

        if (isValid) {
            console.log('Formulario válido. Enviando...');
            form.submit();
        } else {
            event.stopPropagation();
            console.log('Formulario inválido. Por favor, completa los campos requeridos.');
        }

        form.classList.add('was-validated');
    });
