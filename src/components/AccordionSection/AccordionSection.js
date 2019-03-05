import React, {Component} from 'react';
import './AccordionSection.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const expansionPanelStyles = {
  boxShadow: 'none',
  borderBottom: 'none',
  backgroundColor: 'none'
}

class AccordionSection extends Component {
  
  render(){
    return (
      <div>
        <div className="panel-divider"></div>
        <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
          <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
            <span className="accordion-title"><span className="accordion-title-number">01.</span> HTML/CSS/JS Development</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="accordion-content">
            <p>
              I love solving problems and translating ideas into code. Over the years, I've built everything from static sites, custom dashboards, JavaScript web apps, and premium responsive WordPress themes and plugins used by thousands of people. At the heart of all these web experiences is HTML, CSS and JavaScript. I love creating great experiences for users using these technologies.
            </p>
            {/* <LinkButton to="/work/html-css-js" classNames="accordion-button"/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="panel-divider"></div>
        <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
          <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
          <span className="accordion-title"><span className="accordion-title-number">02.</span> WordPress Development</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="accordion-content">
            <p>
              Whether you need a simple blog or an E-Commerce site, a customized WordPress site may be the perfect solution. As the most popular CMS in the world, WordPress has been battle-tested and has an un-paralleled ecosystem of plugins and themes. I have more than seven years of experience building WordPress sites, premium themes and custom plugins to help businesses achieve their goals.
            </p>
            {/* <LinkButton to="/work/wordpress" classNames="accordion-button"/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="panel-divider"></div>
        <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
          <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
          <span className="accordion-title"><span className="accordion-title-number">03.</span> React.js Development</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="accordion-content">
            <p>
              Users today expect fast, app-like experiences when using the web. Full page refreshes can be slow and choppy, so I build universal web applications that leverage client-side apps and server-side rendering to create the fast, modern experience that users expect without sacrificing SEO.
            </p>
            {/* <LinkButton to="/work/react-js" classNames="accordion-button"/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="panel-divider"></div>
      </div>
    );
  }
}

// AccordionSection.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default AccordionSection;