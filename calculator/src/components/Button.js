import React from 'react'

const isOperator = value => {
    return !isNaN(value) || value === '.' || value === '=';
}

export default function Button(props) {
    return (
        <div className={`button-wrapper ${
            isOperator(props.children) ? null : "operator"
         }`}>
           {props.children} 
        </div>
    )
}
