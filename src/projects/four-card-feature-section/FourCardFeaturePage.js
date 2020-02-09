import React from 'react';

import './css/style.css';
import iconSupervisor from './images/icon-supervisor.svg';
import iconTeamBuilder from './images/icon-team-builder.svg';
import iconKarma from './images/icon-karma.svg';
import iconCalculator from './images/icon-calculator.svg';
import FeatureCard, { CARD_THEME_COLOR } from './FeatureCard';

class FourCardFeaturePage extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <p className="tagline">Reliable, efficient delivery</p>
                    <p className="powered-by">Powered by Technology</p>
                    <p className="description">Our Artificial Intelligence powered tools use millions of project data points
                    to ensure that your project is successful</p>
                </header>
                <div className="card-container">
                    <div className="card-column">
                        <FeatureCard 
                            title='Supervisor'
                            subtitle='Monitors activity to identify project roadblocks'
                            icon={iconSupervisor}
                            themeColor={CARD_THEME_COLOR.CYAN}
                        />
                    </div>
                    <div className="card-column">
                        <FeatureCard 
                            title='Team Builder'
                            subtitle='Scans our talent network to create the optimal team for your project'
                            icon={iconTeamBuilder}
                            themeColor={CARD_THEME_COLOR.RED}
                        />
                        <FeatureCard 
                            title='Karma'
                            subtitle='Regularly evaluates our talent to ensure quality'
                            icon={iconKarma}
                            themeColor={CARD_THEME_COLOR.ORANGE}
                        />
                    </div>
                    <div className="card-column">
                        <FeatureCard 
                            title='Calculator'
                            subtitle='Uses data from past projects to provide better delivery estimates'
                            icon={iconCalculator}
                            themeColor={CARD_THEME_COLOR.BLUE}
                        />
                    </div>
                </div>
                <footer>
                    <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Tek Loon</a>.
                    </p>
                </footer>
            </div>
        )
    }
}

export default FourCardFeaturePage