import React, {Component} from 'react';
import styles from './AccordionSection.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     boxShadow: 'none'
//   },
// });

const expansionPanelStyles = {
  boxShadow: 'none',
  borderBottom: 'none',
  backgroundColor: 'none'
}

function AccordionSection(props) {
  
  return (
    <div>
      <div className="panel-divider"></div>
      <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
        <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
          <span className="accordion-title"><span className="accordion-title-number">01.</span> HTML/CSS/JS Development</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="accordion-content">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/work/html-css-js"><button className="accordion-button black">Learn More</button></Link>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className="panel-divider"></div>
      <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
        <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
        <span className="accordion-title"><span className="accordion-title-number">02.</span> WordPress Development</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="accordion-content">
          <p>
            Whether you need a simple blog or an E-Commerce site, a customized WordPress site may be the perfect solution. As the most popular CMS in the world, WordPress has been battle-tested and has an un-paralleled ecosystem of plugins and themes. We have more than seven years of experience building WordPress sites, premium themes and custom plugins to help businesses achieve their goals.
          </p>
          <Link to="/work/wordpress"><button className="accordion-button black">Learn More</button></Link>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className="panel-divider"></div>
      <ExpansionPanel className="accordion-panel" style={expansionPanelStyles}>
        <ExpansionPanelSummary className="accordion-summary" expandIcon={<ExpandMoreIcon />}>
        <span className="accordion-title"><span className="accordion-title-number">03.</span> React.js Development</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="accordion-content">
          <p>
            Users today expect fast, app-like experiences when using the web. Full page refreshes can be slow and choppy, so we build universal web applications that leverage client-side apps and server-side rendering to create the fast, modern experience that users expect without sacrificing SEO.
          </p>
          <Link to="/work/react-js"><button className="accordion-button black">Learn More</button></Link>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className="panel-divider"></div>
    </div>
  );
}

// AccordionSection.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default AccordionSection;