import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components'

const expansionPanelStyles = {
  boxShadow: 'none',
  borderBottom: 'none',
  backgroundColor: 'none'
}

class AccordionSection extends Component {
  
  render(){
    return (
      <StyledAccordionSection>
        <div className="panel-divider"></div>
        <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
          <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
          <span className="accordion-title"><span className="accordion-title-number">01.</span> React.js Development</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="accordion-content">
            <p>
              Users today expect fast, app-like experiences when using the web. Full page refreshes can be slow and choppy, so I build universal web applications that leverage client-side apps and server-side rendering to create the fast, modern experience that users expect without sacrificing SEO.
            </p>
            {/* <LinkButton to="/work/react-js" classNames="accordion-button"/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="panel-divider"></div>
        <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
          <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
          <span className="accordion-title"><span className="accordion-title-number">02.</span> Google Cloud Development</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="accordion-content">
            <p>
              Google Cloud Platform helps you build apps that are incredibly fast, scalable and reliable. Using Firebase and Google Cloud Platform, I build cloud-based apps that utilize real-time updating, cloud functions, and more.
            </p>
            {/* <LinkButton to="/work/wordpress" classNames="accordion-button"/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="panel-divider"></div>
        <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
          <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
          <span className="accordion-title"><span className="accordion-title-number">03.</span> WordPress Development</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="accordion-content">
            <p>
              Whether you need a simple blog or an E-Commerce site, a customized WordPress site may be the perfect solution. As the most popular CMS in the world, WordPress has been battle-tested and has an un-paralleled ecosystem of plugins and themes. I have more than seven years of experience building WordPress sites, premium themes and custom plugins to help businesses achieve their goals.
            </p>
            {/* <LinkButton to="/work/wordpress" classNames="accordion-button"/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="panel-divider"></div>
      </StyledAccordionSection>
    );
  }
}

export default AccordionSection;

const StyledAccordionSection = styled.div`
  .accordion-summary div:first-child {
    margin: 22px 0;
  }
  .accordion-summary:hover .accordion-title {
    /* color: #000; */
    -webkit-animation: white-rainbow 6s infinite;
    -ms-animation: white-rainbow 6s infinite;
    -o-animation: white-rainbow 6s infinite;
    animation: white-rainbow 6s infinite;
  }
  .accordion-title {
    font-size: 1.75rem;
    line-height: 1.25;
    /* margin: 1rem auto .75rem; */
    color: #777;
    -webkit-transition: color 1s; /* Safari */
    transition: color 1s;
  }
  .accordion-title-number {
    font-size: 1.5rem;
  }
  .accordion-summary[aria-expanded="true"] .accordion-title {
    color: #191919;
  }
  .accordion-panel .accordion-content {
    display: block;
    text-align: left;
  }
  .accordion-panel .accordion-content p {
    font-size: 1.4rem;
    line-height: 160%;
  }
  .accordion-button button {
    margin-top: 1.8rem;
  }
  .panel-divider {
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  .MuiExpansionPanel-root-1:before {
    display: none !important;
    opacity: 0 !important;
    background-color: rgb(255, 255, 255);
  }
  @media screen and (min-width: 1601px) {
    .accordion-title {
      font-size: 1.4rem;
      line-height: 1.25;
    }
    .accordion-title-number {
      font-size: 1.2rem;
    }
    .accordion-panel .accordion-content p {
      font-size: 1.2rem;
    }
    
  }
  @media screen and ( min-width: 1201px ) { 
  }
  @media screen and ( min-width: 801px ) and ( max-width: 1600px ) {
    .accordion-title {
      font-size: 1.2rem;
      line-height: 1.25;
    }
    .accordion-title-number {
      font-size: 1rem;
    }
    .accordion-panel .accordion-content p {
      font-size: 1rem;
    }
  }
  @media screen and ( min-width: 801px ) and ( max-width: 1200px ) {
  }
  @media screen and ( max-width: 800px ) {
    .accordion-summary {
      padding-left: 0px !important;
    }
  }
  @media screen and ( min-width: 601px ) and ( max-width: 800px ) {
    .accordion-title {
      font-size: 1.1rem;
      line-height: 1.25;
    }
    .accordion-title-number {
      font-size: .95rem;
    }
    .accordion-panel .accordion-content p {
      font-size: 1rem;
    }
  }
  @media screen and ( max-width: 600px ) {
    
    .accordion-title {
      font-size: 1rem;
    }
    .accordion-title-number {
      font-size: .9rem;
    }
    
    .accordion-panel .accordion-content p {
      font-size: .8rem;
    }
    
  }
`