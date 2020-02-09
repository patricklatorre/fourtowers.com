import emailjs from 'emailjs-com'
import config from './config.js'

function openNav() {
  document.getElementById('side-nav').style.width = '100%'
}

function closeNav() {
  document.getElementById('side-nav').style.width = '0'
}

/**
 * Init email service
 * for contact message
 * form.
 */
emailjs.init(config.emailjs.userId)

/**
 * Open sidenav on clicking
 * hamburger
 */
document.getElementById('hamburger-icon').addEventListener('click', openNav)

/**
 * Close nav on clicking any
 * CTA inside sidenav
 */
document.querySelectorAll('#side-nav > *').forEach(el => {
  el.addEventListener('click', closeNav)
})

/**
 * Send form as email using
 * emailjs service
 */
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