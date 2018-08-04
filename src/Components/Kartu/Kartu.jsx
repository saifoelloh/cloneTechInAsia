import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KartuSingular from './KartuSingular.jsx'
import Aux from '../../hoc/Auxiliary.jsx'

const Kartu = props => {
    return (
        <Aux>
            { props.data.map( datum => {
                return (
                    <Grid item md={12} xs={12}>
                        <KartuSingular data={datum} />
                    </Grid>
                )
            })}
        </Aux>
    )
}

export default Kartu;
