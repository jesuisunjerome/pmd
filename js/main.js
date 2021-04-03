(function () {
    'use strict'

    OpenModalLogIn();
    FormValidation();
})()

function FormValidation() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
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
}

function OpenModalLogIn() {
    $('#btnHeaderCreerCompte').click(function () {
        $('#pnlForgotPassword').hide();
        $('#pnlLogin').hide();
        $('#pnlSignUp').show();

        var myModal = new bootstrap.Modal(document.getElementById('modalLog'))
        myModal.show();

        return false;
    })

    $('#btnHeaderSeConnecter').click(function () {
        $('#pnlForgotPassword').hide();
        $('#pnlSignUp').hide();
        $('#pnlLogin').show();

        var myModal = new bootstrap.Modal(document.getElementById('modalLog'))
        myModal.show();

        return false;
    })

    $("#switchToSeConnecter").click(function () {
        $('#pnlForgotPassword').hide();
        $('#pnlSignUp').hide();
        $('#pnlLogin').show();

        return false;
    })

    $("#switchToCreerCompte").click(function () {
        $('#pnlForgotPassword').hide();
        $('#pnlLogin').hide();
        $('#pnlSignUp').show();

        return false;
    })

    $("#switchToForgotPassword").click(function () {
        $('#pnlLogin').hide();
        $('#pnlSignUp').hide();
        $('#pnlForgotPassword').show();

        return false;
    })
}
