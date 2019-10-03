import React, { useState } from 'react';
import Display from './Display';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state={
            balls: "",
            strikes: "",
            fouls: "",
            hits: ""
        };
    }

    ballsUp = () => {
        if(this.state.balls < 3){
            this.setState({ ...this.state, balls: this.state.balls + 1});
        } else {
            this.setState({
                balls: 0
            });
        }
    };
    strikesUp = () => {
        if (this.state.strikes < 2){
           this.setState({
            ...this.state,
            strikes: this.state.strikes + 1
           });
        } else {
            this.setState({
                balls: 0,
                strikes: 0
            })
        }
    }
    hitsUp = () => {
        this.setState({
            balls: 0,
            strikes: 0
        });
    };
    foulsUp = () => {
        if (this.state.strikes < 2) {
            this.setState({
                ...this.state,
                strikes: this.state.strikes + 1
            });
        } else { 
            this.setState({
                ...this.state
            });
        }
    
    
    }

    render() {
    return(
        <div>
            <Display
            balls={this.state.balls}
            strikes={this.state.strikes}
            fouls={this.state.fouls}
            hits={this.state.hits}
            />
            <button onClick={this.ballsUp}>Ball</button>
            <button onClick={this.strikesUp}>Strike</button>
            <button onClick={this.foulsUp}>Foul</button>
            <button onClick={this.hitsUp}>Hit</button>
        </div>
    )
    }
}

export default Dashboard;