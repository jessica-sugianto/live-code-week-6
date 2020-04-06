$(document).ready(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') === null) {
        $('#before-login').show()
        $('#after-login').hide()

        $('#form-login').submit((e) => {
            e.preventDefault()

            const email = $('#login-email').val()
            const pass = $('#login-password').val()

            $.ajax({
                    url: 'http://localhost:3000/users/login',
                    method: 'POST',
                    data: {
                        email: email,
                        password: pass
                    }
                })
                .done(result => {
                    localStorage.setItem('token', result.token)
                    console.log(localStorage.getItem('token'))
                })
                // console.log(email, pass)
        })
    } else {
        $('#before-login').hide()
        $('#after-login').show()
    }
})