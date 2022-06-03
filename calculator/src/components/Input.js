import React from 'react'
import './Input.css';
export default function Input({input}) {
    return (
        <div className="input">
          {input} <span>{input?.length === 0 && 0}</span>
        </div>
    )
}
