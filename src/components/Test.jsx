import { memo } from "react"
import React from 'react'

const Greeting = (props) => {
    console.log('Greeting comp render')
    return (
        <h1>Hi {props.name}!</h1>
    )
}

const Test = () => {
    console.log('App comp render')
  return (
    <div style={{ color: "#fff", padding: "20px" }}>
        <Greeting name="Irfan" />
    </div>
  )
}

export default memo(Test)