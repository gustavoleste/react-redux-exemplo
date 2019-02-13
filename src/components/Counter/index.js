import React from 'react'
import styled from 'styled-components'
import {increment, decrement, saveNumber,deleteNumber, reset} from '../../store/actions'
import {connect} from 'react-redux'

const counter = ({count, increment, decrement, save, reset}) => (
                <Container>
                        <h1>React | Redux - Exemplo</h1>
                        <h2>Contador: {count}</h2>
                        <button className="button button-outline" onClick={()=> increment(1)}>+1</button>
                        <span />
                        <button className="button button-outline" onClick={()=> increment(5)}>+5</button>
                        <span />
                        <button className="button button-outline" onClick={()=> increment(10)}>+10</button>                
                        <span />
                        <button className="button button-outline" onClick={()=> decrement(1)}>-1</button>
                        <span />
                        <button className="button button-outline" onClick={()=> decrement(5)}>-5</button>
                        <span />
                        <button className="button button-outline" onClick={()=> decrement(10)}>-10</button>
                        <span />
                        <button onClick={reset}>zerar</button>
                        <span />
                        <button onClick={()=> save(count)}>salvar</button>                        
                </Container>
)

const MapStateToProps = state => ({
        count: state.count
})

const MapDispatchToProps = dispatch => ({
        increment: (value)=> dispatch(increment(value)),
        decrement: (value)=> dispatch(decrement(value)),
        reset: ()=> dispatch(reset()),
        save: (value)=> dispatch(saveNumber(value))
})

export default connect(MapStateToProps, MapDispatchToProps)(counter)

const Container = styled.article`
        span {
                margin: 0 1rem;
        }
`
