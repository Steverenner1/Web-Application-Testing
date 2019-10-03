import React from 'react';

export default function Display (props){
    return(
        <div>
            <h1>{props.balls}</h1>
            <h1>{props.strikes}</h1>
            <h1>{props.fouls}</h1>
            <h1>{props.hits}</h1>
        </div>
    )
}