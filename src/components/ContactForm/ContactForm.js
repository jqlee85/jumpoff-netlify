import React, {useState, useEffect, useRef, Component} from 'react'
import  './ContactForm.scss'
import LinkButton from '../LinkButton/LinkButton'
import qs from 'qs'
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = (props) => {
  
  // Component State
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    formFilled: false,
    captchaDone: false,
    canSubmit: false,
    submitResponse: false,
    recaptchaValue: false
  })
  
  // Safely set state for asynchronous actions
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => (mountedRef.current = false)
  }, [])
  const safeSetState = (...args) => mountedRef.current && setState(...args)

  const recaptchaRef = useRef(null)

  // Handle form submit
  const handleSubmit = e => {

    e.preventDefault()
    checkCanSubmit()
    
    // If form filled out but captcha not done, execute captcha function
    if (state.formFilled && !state.captchaDone) {
      recaptchaRef.current.execute()
      return false
    }

    // Abort submission if not ready for submit
    if (!state.canSubmit) {
      return false
    }

    // Collect form data
    let formData = {
      "form-name": props.name,
      "name": state.name,
      "email": state.email,
      "message": state.message,
      "g-recaptcha-response": recaptchaRef.current.getValue()
    }
    console.log(formData)
    
    // If recaptcha value set
    if (state.recaptchaValue){
      fetch( window.location.href + "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(formData)
      })
      .then(
        response => {
          console.log(response)
          if (response.status > 199 && response.status < 300){
            safeSetState({
              ...state,
              submitResponse: 'success'
            })
          } else {
            safeSetState({
              ...state,
              submitResponse: 'error'
            })
          } 
        }
      )
      .catch(
        error => {
          console.error(error)
          safeSetState({
            ...state,
            submitResponse: 'error'
          })
        }
      )
    } 
    
  }

  // Handle form change
  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
    if (!state.formFilled && ( state.name !== '' && state.email !== '' && state.message !== '' ) ){
      setState({
        ...state,
        formFilled: true
      })
      if (typeof(recaptchaRef) !== 'null'){
        if (typeof(recaptchaRef.current) !== 'null'){
          recaptchaRef.current.execute()
        } else {
          recaptchaRef.execute()
        }
      }
    } else if ( state.name === '' && state.email === '' && state.message === '' ) {
      setState({
        ...state,
        formFilled: false
      })
    }
    checkCanSubmit()
  }

  const onRecaptchaChange = () => {
    setState({
      ...state,
      recaptchaValue: recaptchaRef.current.getValue(),
      captchaDone: true
    })
    checkCanSubmit()
  }

  const checkCanSubmit = () => {
    if (state.formFilled && state.captchaDone) {
      setState({
        ...state,
        canSubmit: true
      })
    } else {
      setState({
        ...state,
        canSubmit: false
      })
    }
  }

  const { name, email, message, canSubmit, formFilled, captchaDone } = state
  let containerClasses = 'jo-contact-form-container'
  if (!canSubmit) { containerClasses += ' inactive' }
  if (props.colorScheme === 'dark' ) containerClasses += ' dark-bg'
  let nameClasses = 'input100'
  if (name !== '') nameClasses += ' has-val'
  let emailClasses = 'input100'
  if (email !== '') emailClasses += ' has-val'
  let messageClasses = 'input100'
  if (message !== '') messageClasses += ' has-val'
  let recaptchaError = false
  if (formFilled && !captchaDone) {
    recaptchaError = true
  }

  return (
    <div className="jo-contact-form">
      {state.submitResponse === 'error' &&
        <div className="jo-contact-form-submission-message jo-contact-form-error">
          Your information was not sent. Please try again later.
        </div>
      }
      {state.submitResponse === 'success' &&
        <div className="jo-contact-form-submission-message jo-contact-form-success">
          Thanks for the message! Expect a reply shortly.
        </div>
      }
      <h2 className="jo-contact-form-title">Contact</h2>
      <form name={props.name} method="post" onSubmit={handleSubmit} data-netlify-recaptcha="true">
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LcMq5IUAAAAAHhkhS2bJiOZSWHu1KknvntqaAWh"
          onChange={onRecaptchaChange}
        />
        <div className={containerClasses}>
          <input type="hidden" name="form-name" value="contactpageform"/>
          <div>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
              <label htmlFor="name">Your Name</label>
              <input className={nameClasses} type="text" name="name" value={name} onChange={handleChange}/>
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
              <label htmlFor="email">Your Email</label>
              <input className={emailClasses} type="email" name="email" value={email} onChange={handleChange}/>
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input">
              <label htmlFor="message">Message</label>
              <textarea className={messageClasses} name="message" onChange={handleChange} value={message}/>
              <span className="focus-input100"></span>
            </div>
            {canSubmit && <div className="recaptcha-information">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</div>}
            {recaptchaError && <div className="recaptcha-information">Google reCAPTCHA has not been able to verify you, please try later.</div>}
            {canSubmit && <LinkButton size="large" text="Send" linkType="form"/>}
            {!canSubmit && <LinkButton size="large" text="Send" linkType="form" inactive={true} />}
          </div>
        </div>
      </form>
      
    </div>
  )
}

export default ContactForm