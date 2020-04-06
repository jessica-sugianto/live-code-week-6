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
                        // console.log(localStorage.getItem('token'))


                    $('#before-login').hide()
                    $('#after-login').show()
                    $('#login-email').val('')
                    $('#login-password').val('')
                })
                .fail(err => {
                    console.log(err)
                })
                // console.log(email, pass)
        })
    } else {
        $('#food-list').html('')
        $('#before-login').hide()
        $('#after-login').show()

        $('#form-food').submit((e) => {
            e.preventDefault()

            const title = $('#food-title').val()
            const price = $('#food-price').val()
            const ingredients = $('#food-ingredients').val()
            const tag = $('#food-tag').val()
            console.log(title, price, ingredients, tag)

            $.ajax({
                    url: 'http://localhost:3000/foods/',
                    method: 'POST',
                    headers: {
                        token: localStorage.getItem('token')
                    },
                    data: {
                        title: title,
                        price: price,
                        ingredients: ingredients,
                        tag: tag
                    }
                })
                .done(result => {
                    $('#food-list').html('')
                    foods()
                })
                .fail(err => {
                    console.log(err)
                })
        })

        foods = () => {
            $.ajax({
                    url: 'http://localhost:3000/foods/',
                    method: 'GET',
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .done(result => {
                    let data = ``
                    for (let i = 0; i < result.length; i++) {
                        data += `<div class="card">
                        <div class="card-body pb-0">
                          <div class="d-flex justify-content-between mb-0">
                            <div class="col-9">
                              <h5 class="font-weight-bold"> ${result[i].title} </h5>
                              <p>Rp.${result[i].price}</p>
                            </div>
                            <div class="col-3 d-flex align-items-baseline">
                              <i class="fas fa-tag text-grey mr-2"></i>
                              <p class="text-grey">${result[i].tag}</p>
                              <button class="fas fa-trash text-danger ml-auto cursor-pointer"></button>
                            </div>
                          </div>
                          <div class="card-body border-bottom">
                          ${result[i].ingredients}
                          </div>
              
                        </div>
                      </div>`
                    }
                    $('#food-list').append(data)
                })
                .fail(err => {
                    console.log(err)
                })
        }
        foods()
    }
})