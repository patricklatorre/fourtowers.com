import emailjs from 'emailjs-com'
import config from './config.js'

emailjs.init(config.emailjs.userId)

document.getElementById('message-form').addEventListener('submit', function (event) {
  event.preventDefault()

  emailjs.sendForm(
    config.emailjs.service,
    config.emailjs.template,
    this
  ).then((response) => {
    if (response.status === 200) {
      alert('Your message has been sent! Thank you for contacting us.')
      document.getElementById('message-form').reset()
    } else {
      alert("Your message can't be sent right now. You can send us an email or text instead.")
    }
  })
})