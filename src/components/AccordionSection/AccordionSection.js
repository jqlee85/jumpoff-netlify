import React, {Component} from 'react';
// import styles from './AccordionSection.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function AccordionSection(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <span class="accordion-title">01. HTML/CSS/JS Development</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            Lorem Ipsum sit dolor
          </p>
          <a><button className="black">Learn More</button></a>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <span class="accordion-title">02. WordPress Development</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            Whether you need a simple blog or an E-Commerce site, a customized WordPress site may be the perfect solution. As the most popular CMS in the world, WordPress has been battle-tested and has an un-paralleled ecosystem of plugins and themes. We have more than seven years of experience building WordPress sites, premium themes and custom plugins to help businesses achieve their goals.
          </p>
          <a><button className="black">Learn More</button></a>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <span class="accordion-title">03. React.js Development</span>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            Users today expect fast, app-like experiences when using the web. Full page refreshes can be slow and choppy, so we build universal web applications that leverage client-side apps and server-side rendering to create the fast, modern experience that users expect without sacrificing SEO.
          </p>
          <a><button className="black">Learn More</button></a>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

AccordionSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccordionSection);