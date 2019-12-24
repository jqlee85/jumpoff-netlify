import React, { useState, useEffect, useRef } from 'react'
import LinkButton from './LinkButton'
import qs from 'qs'
import ReCAPTCHA from "react-google-recaptcha"
import styled from 'styled-components'

const ContactForm = (props) => {
  
  
  // Component State
  const [inputName,setInputName] = useState('')
  const [inputEmail,setInputEmail] = useState('')
  const [inputMessage,setInputMessage] = useState('')
  const [formFilled, setFormFilled] = useState(false)
  const [captchaDone, setCaptchaDone] = useState(false)
  const [canSubmit, setCanSubmit] = useState(false)
  const [submitResponse, setSubmitResponse] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState(false)

  // Safely set state for asynchronous actions
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => (mountedRef.current = false)
  }, [])
  const safeSetState = (setStateCallback, val) => mountedRef.current && setStateCallback(val)

  const recaptchaRef = useRef(null)

  // Handle form submit
  const handleSubmit = e => {

    e.preventDefault()
    checkCanSubmit()
    
    // If form filled out but captcha not done, execute captcha function
    if (formFilled && !captchaDone) {
      recaptchaRef.current.execute()
      return false
    }

    // Abort submission if not ready for submit
    if (!canSubmit) {
      return false
    }

    
    
    // If recaptcha value set
    if (recaptchaValue){
      
      // Collect form data
      let formData = {
        "form-name": props.name,
        "name": inputName,
        "email": inputEmail,
        "message": inputMessage,
        "g-recaptcha-response": recaptchaRef.current.getValue()
      }
      
      fetch( window.location.href + "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(formData)
      })
      .then(
        response => {
          if (response.status > 199 && response.status < 300){
            safeSetState(setSubmitResponse,'success')
          } else {
            safeSetState(setSubmitResponse,'error')
          } 
        }
      )
      .catch(
        error => {
          console.error(error)
          safeSetState(setSubmitResponse,'error')
        }
      )
    } 
    
  }


  // Handle form change
  const handleChange = (e) => {
    switch(e.target.name) {
      case 'name':
        setInputName(e.target.value)
        break
      case 'email':
        setInputEmail(e.target.value)
        break
      case 'message':
        setInputMessage(e.target.value)
        break
      default:
        break
    }
    if (!formFilled && ( inputName !== '' && inputEmail !== '' && inputMessage !== '' ) ){
      safeSetState(setFormFilled, true)
      if (typeof(recaptchaRef) !== 'null'){
        if (typeof(recaptchaRef.current) !== 'null'){
          recaptchaRef.current.execute()
        } else {
          recaptchaRef.execute()
        }
      }
    } else if ( inputName === '' && inputEmail === '' && inputMessage === '' ) {
      safeSetState(setFormFilled,false)
    }
    checkCanSubmit()
  }

  const onRecaptchaChange = () => {
    safeSetState(setRecaptchaValue, recaptchaRef.current.getValue())
    safeSetState(setCaptchaDone, true)
    checkCanSubmit()
  }

  const checkCanSubmit = () => {
    if (formFilled && captchaDone) {
      safeSetState(setCanSubmit,true)
    } else {
      safeSetState(setCanSubmit,false)
    }
  }

  let containerClasses = 'jo-contact-form-container'
  if (!canSubmit) { containerClasses += ' inactive' }
  if (props.colorScheme === 'dark' ) containerClasses += ' dark-bg'
  let nameClasses = 'input100'
  if (inputName !== '') nameClasses += ' has-val'
  let emailClasses = 'input100'
  if (inputEmail !== '') emailClasses += ' has-val'
  let messageClasses = 'input100'
  if (inputMessage !== '') messageClasses += ' has-val'
  let recaptchaError = false
  if (formFilled && !captchaDone) {
    recaptchaError = true
  }

  return (
    <StyledContactForm className="jo-contact-form">
      {submitResponse === 'error' &&
        <div className="jo-contact-form-submission-message jo-contact-form-error">
          Your information was not sent. Please try again later.
        </div>
      }
      {submitResponse === 'success' &&
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
              <input className={nameClasses} type="text" name="name" value={inputName} onChange={handleChange}/>
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
              <label htmlFor="email">Your Email</label>
              <input className={emailClasses} type="email" name="email" value={inputEmail} onChange={handleChange}/>
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input">
              <label htmlFor="message">Message</label>
              <textarea className={messageClasses} name="message" value={inputMessage} onChange={handleChange}/>
              <span className="focus-input100"></span>
            </div>
            {canSubmit && <div className="recaptcha-information">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</div>}
            {recaptchaError && <div className="recaptcha-information">Google reCAPTCHA has not been able to verify you, please try later.</div>}
            {canSubmit && <LinkButton size="large" text="Send" linkType="form"/>}
            {!canSubmit && <LinkButton size="large" text="Send" linkType="form" inactive={true} />}
          </div>
        </div>
      </form>
      
    </StyledContactForm>
  )
}

export default ContactForm

const StyledContactForm = styled.div`
  
  position: relative;
  
  input {
      outline: none;
      border: none;
      
      &:focus {
        border-color: transparent !important;
      }
      
      &.input100 {
        height: 40px;
      }
      
      &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder, &:-ms-input-placeholder {
        font-weight: normal;
        color: #555555;
        &:focus {
          color:transparent;
        }
      }
  }
  
  h2 {
    font-size: 3em;
    text-align: left;
    margin-bottom: 1.5em;
  }
  
  textarea {
    outline: none;
    border: none;
    
    &:focus {
      border-color: transparent !important;
    }
    
    &.input100 {
      min-height: 110px;
      padding-top: 9px;
      padding-bottom: 13px;
    }
    
    &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder, &:-ms-input-placeholder {
      font-weight: normal;
      color: #555555;
      &:focus {
        color:transparent;
      }
    }
    
  }
 
  /*---------------------------------------------*/
  .jo-link-button-wrapper {
    width: auto;
    display: flex;
    justify-content: flex-start;
  }
  
  /*==================================================================
  [ Form ]*/
  
  .contact100-form {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 68px;
  }
  
  .wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #d9d9d9;
    padding-bottom: 13px;
    margin-bottom: 65px;
  }
  
  .rs1-wrap-input100 {
    width: calc((100% - 30px) / 2);
    display: inline-block;
  }
  
  .rs1-wrap-input100:first-child {
    margin-right:30px;
  }
 
  label {
    display: block;
    font-weight: normal;
    font-size: 16px;
    color: #999999;
    line-height: 1.5;
    padding-left: 5px;
    text-align: left;
  }
  
  .input100 {
    display: block;
    width: 100%;
    background: transparent;
    font-weight: 600;
    font-size: 2em;
    color: #555555;
    line-height: 1.2;
    padding: 0 5px;
   
    &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder, &:-ms-input-placeholder  {
      font-size: .7em;
    }
  
  }

  .focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
      background: #ef6085; /* Old browsers */
      background: -moz-linear-gradient(45deg, #ef6085 1%, #f89c44 48%, #f0ba45 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(45deg, #ef6085 1%,#f89c44 48%,#f0ba45 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(45deg, #ef6085 1%,#f89c44 48%,#f0ba45 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ef6085', endColorstr='#f0ba45',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    }
  }
  
  /*---------------------------------------------*/
   
  .input100:focus + .focus-input100::before, .has-val + .focus-input100::before {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .rs1-wrap-input100 {
      width: 100%;
    }
  }
  
  /*------------------------------------------------------------------ [ Alert validate ]*/
  .validate-input {
    position: relative;
  }

  .alert-validate {
  
    &::before {
      content: attr(data-validate);
      position: absolute;
      max-width: 70%;
      background-color: #fff;
      border: 1px solid #ef6085;
      border-radius: 2px;
      padding: 4px 25px 4px 10px;
      top: 58%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 2px;
      pointer-events: none;
      font-weight: normal;
      color: #ef6085;
      font-size: 13px;
      line-height: 1.4;
      text-align: left;
      visibility: hidden;
      opacity: 0;
      -webkit-transition: opacity 0.4s;
      -o-transition: opacity 0.4s;
      -moz-transition: opacity 0.4s;
      transition: opacity 0.4s;
      
      &:hover {
        visibility: visible;
        opacity: 1;
      }
   
    }
  
    &::after {
      content: "\f06a";
      font-family: FontAwesome;
      display: block;
      position: absolute;
      color: #ef6085;
      font-size: 16px;
      top: 58%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 8px;
    }
  
  }
  
  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }
  
  /*---- Error and Success ----*/
  .jo-contact-form-submission-message {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 10;
    background: rgba(255,255,255,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-size: 1.8em;
    font-weight: bold;
  }
  .grecaptcha-badge {
    display: none !important;
  }
  .recaptcha-information {
    position: absolute;
    color: #bbb;
    margin-top: -42px;
    text-align: left;
   
    a {
      color: #999;
      text-transform: none !important;
    }
  
  }
`