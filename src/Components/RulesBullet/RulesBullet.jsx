import React from 'react'
import './RulesBullet.scss'

const RulesBullet = ({ rules }) => {
    return (
        <div className="rules-container">
            {rules.map((rule, index) => (
                <div key={index} className="rule-section">
                    <h3>{rule.point}</h3>
                    <ul className="rule-list">
                        {rule.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RulesBullet;
