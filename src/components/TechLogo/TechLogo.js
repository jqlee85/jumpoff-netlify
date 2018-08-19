import React, {Component} from 'react';
import styles from './TechLogo.css';
import GraphQLLogo from './GraphQLLogo/GraphQLLogo';
import ReactLogo from './ReactLogo/ReactLogo';
import ReduxLogo from './ReduxLogo/ReduxLogo';
import WordPressLogo from './WordPressLogo/WordPressLogo';

class TechLogo extends Component {

	constructor(props){
    super(props);
  }

  render(){
		
		let color = this.props.color ? this.props.color : false;
		let width = this.props.width ? this.props.width : '300px';
		let height = this.props.height ? this.props.height : '300px';
		let logo = this.props.logo ? this.props.logo : 'graphql';
		let logoClass = ' ' + logo + '-logo';
		let classNames = 'tech-logo';
		if (logo) classNames += logoClass;
		if (this.props.rotating) classNames += ' rotating';
		let inlineStyles = {
			width: width,
			height: height
		}	
			
		return <div className={classNames} style={inlineStyles} >	
			{this.getLogo(logo,color)}
		</div>
	}

	getLogo(logo,color) {
		switch (logo) {
			case 'react':
				return <ReactLogo color={color}/>;
			case 'graphql':
				return <GraphQLLogo color={color}/>;
			case 'redux':
				return <ReduxLogo color={color}/>;
			case 'wordpress':
				return <WordPressLogo color={color}/>;
			default:
				break;
		}		
	}

}

export default TechLogo;

