import React from 'react'
import styled from 'styled-components'
import Counter from './components/Counter'
import NumbersList from './components/NumbersList'
const App = () => (
                <Container>
                        <Counter />
                        <NumbersList />
                </Container>
)

export default App

const Container = styled.section`
        text-align: center;
        padding: 1rem;
`
