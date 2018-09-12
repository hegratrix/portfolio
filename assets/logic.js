$(document).ready( function () {
    $('#submit').click( function (event) {
        
        const name = $('#name').val()
        const email = $('#email').val()
        const message = $('#message').val()

        if (email.includes('@') && email.includes('.')) {
            console.log('valid email')
        } else {
            event.preventDefault()
            $('#email-label').css({'color': "#96042d", "font-weight": "bold"})
            $('#email-label').text('Please enter your email.')
        }

        if (name.length < 2) {
            event.preventDefault()
            $('#name-label').css({'color': "#96042d", "font-weight": "bold"})
            $('#name-label').text('Please enter your name.')
        } else {
            console.log("valid name.")
        }

        if (message.length < 2) {
            event.preventDefault()
            $('#message-label').css({'color': "#96042d", "font-weight": "bold"})
            $('#message-label').text('Please enter a message.')
        } else {
            console.log("valid message")
        }
        
        console.log(name)
        console.log(email)
        console.log(message)

    })



})