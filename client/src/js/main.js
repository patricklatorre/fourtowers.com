import emailjs from 'emailjs-com'
import config from './config.js'

emailjs.init(config.emailjs.userId)

document.getElementById('message-form').addEventListener('submit', function (event) {
  event.preventDefault()

  emailjs.sendForm(
    config.emailjs.service,
    config.emailjs.template,
    this
  )
})