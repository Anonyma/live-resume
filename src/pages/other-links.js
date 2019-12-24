import React from 'react'
import { Styled } from 'theme-ui'

export default props => (
    <div style={{ textAlign: "center", margin: "100px" }}>
        <Styled.h3>Other links:</Styled.h3>
        <br />
        <Styled.a href="https://www.freecodecamp.org/anonyma" target="_blank">
            freeCodeCamp
</Styled.a>
        <br />
        <Styled.a href="https://www.twitter.com/anonyma" target="_blank">
            Twitter
</Styled.a>
        <br />


        <i>(And more coming soon :D)</i>
    </div>
)