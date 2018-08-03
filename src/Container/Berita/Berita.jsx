import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Kartu from '../../Components/Kartu/Kartu.jsx'

export default class Berita extends Component {
    state = {
        direction: "row",
        alignItems: "center",
        justify: "center"
    }
    render() {
        const { alignItems, direction, justify } = this.state
        return (
            <Grid
                contaner
                alignItems={alignItems}>
                <Grid item md={8} sm={12} >
                    <Kartu />
                </Grid>
                <Grid item md={4} sm={12}>
                </Grid>
            </Grid>
        );
    }
}
