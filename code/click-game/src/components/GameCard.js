import React from 'react';
import './style.css';

function GameCard(props) {
    return (
        <div className="col">
            <div className="card" onClick={() => props.select(props.id)}>
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
            </div>
        </div>
    );
};

export default GameCard;
