import React from 'react';

export const CARD_THEME_COLOR = {
    CYAN: 'cyan',
    RED: 'red',
    ORANGE: 'orange',
    BLUE: 'blue',
}

class FeatureCard extends React.Component {
    render() {
        const { title, subtitle, icon, themeColor } = this.props;
        let cardTopBorder = `card-top-${themeColor}-border`;
        return (
            <div className={`card ${cardTopBorder}`}>
                <p className="card-title">{title}</p>
                <p className="card-subtitle">{subtitle}</p>
                <img src={icon} alt="feature icon" className="card-icon" />
            </div>
        )
    }
}

export default FeatureCard