import React from 'react';
import {connect} from 'react-redux'
import {deleteNumber} from '../../store/actions'
import styled from 'styled-components'

const NumbersList = ({list, deleteNumber}) =>(
        <Container>
                <p>Números Salvos:</p>
                {list.map( (num, index) =>
                        <li key={index}>
                        {num}
                        <span />
                        <button className='button button-outline' onClick={()=> deleteNumber(index)}>Deletar</button>
                        </li>)
                }
        </Container>
)

const mapStateToProps = state => ({
        list: state.numbers
})

const mapDispatchToProps = dispatch => ({
        deleteNumber: (index)=> dispatch(deleteNumber(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(NumbersList)

const Container = styled.ul`
        padding: 1rem;
        span{
                margin:  0.5rem;
        }
`
