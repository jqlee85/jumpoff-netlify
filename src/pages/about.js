import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

const About = () => {
  
    let year = new Date().getFullYear()
    let yearsExperience = year - 2011
    let title = 'About Jumpoff'

    return <StyledAbout>
      <Seo title={title} />
      <article className="jo-content jo-post-content-wrapper">
          <h2>Short Story</h2>
          <p>Jumpoff is a company focused on designing and developing <Link to="/portfolio">great experiences for the web</Link>. It was started on the island of Maui in 2015 by <a href="https://jessequinnlee.com/about/" target="_blank" rel="noopener noreferrer">Jesse Lee</a>. If you'd like to discuss your web project <AnchorLink href='#contact'>drop us a line</AnchorLink>.</p>
          <h2>Long Story</h2>
          <p><span style={{'fontStyle': 'italic'}}>*Since Jumpoff is usually just Jesse, he's going to switch over to the first-person riiiiiiight now.</span></p>
          <p>I got my start in the world of architectural design. But after earning my degree in 2010 I turned my attention from designing buildings to designing for the web while working with a team of incredibly talented photographers, designers and developers at <a href="https://groupon.com">Groupon</a> in Chicago. There I became a <a href="https://jessequinnlee.com/art/" target="blank">Photoshop wizard</a>, honed my design sense, took programming classes, fell in love with coding, and started building web apps. Since then, I've worked as a designer, photographer and web developer in Hawaii, California, Ecuador and Chile. I also spent a summer in the New Mexican desert building sustainable <a href="https://www.earthshipglobal.com/" target="_blank" rel="noopener noreferrer">Earthship houses</a> out of dirt, used tires and beer bottles.</p>
          <p>I have {yearsExperience} years of experience designing and coding for the web, designing/coding custom PHP CMSes for Groupon, doing custom WordPress development and e-commerce sites for businesses while working at <a href="https://www.hawaiiwebgroup.com" target="_blank" rel="noopener noreferrer">an agency in Hawaii</a>, and developing premium WordPress themes and plugins for <a href="https://www.organicthemes.com/" target="_blank" rel="noopener noreferrer">Organic Themes</a>.</p>
          <p>Now I'm focused on building modern web-app experiences using ReactJS, GraphQL and WordPress as a CMS backend, as well as taking classes in Machine Learning and Data Science on Udacity and Coursera.</p>
          <p>Since 2016 I've been working remotely, and feel extremely lucky to be able to live and work abroad, collaborating with co-workers and clients both in-person, and thousands of miles away. This has also allowed me to experience different cultures, learn Spanish, and <a href="https://www.thelanguage.co/" target="blank">teach English</a>. I'm currently based in Santiago, Chile.</p>
          <p>As much as I love designing and coding, I also enjoy my screenless time, and frequently spend it bouldering, surfing, playing guitar, playing ultimate frisbee, skateboarding, hiking, writing and taking Spanish classes.</p>
          <p>I love new challenges and helping people achieve their goals on the web, so if you'd like to discuss your project, please drop me a line below or find me on <a href="https://www.linkedin.com/in/jqlee85" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </article>
      <div id="contact" className="jo-row">
        <div className="jo-content">
          <ContactForm name="aboutpageform"/>
        </div>  
      </div>
    </StyledAbout>
}

export default About

const StyledAbout = styled.section`
  
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-bottom: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media ${screen.md} {
    padding: 40px 0px;
  }

  h1, p {
    text-align: left;
  }

  .jo-work-header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px;

    h1.jo-work-header-title {
      text-align: center;
    }

  }

  
`