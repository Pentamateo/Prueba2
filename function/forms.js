$(document).ready(function() {
    $("#miFormulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 4
            },
            
            contraseña:{
                required: true,
                minlength: 4
            }, 
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nombre: {
                required: "Por favor, ingresa tu nombre",
                minlength: "El nombre debe tener al menos 4 caracteres"
            },
            contraseña:{
                required:"Por favor ingrese su contraseña",
                minlength:"La contraseña debe tener al menos unos 4 caracteres"
            },
            email: {
                required: "Por favor, ingresa tu email",
                email: "Por favor, ingresa un email válido"
            }

        }
    });
});
