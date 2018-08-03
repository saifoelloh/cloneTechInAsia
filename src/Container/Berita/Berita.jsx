import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Kartu from '../../Components/Kartu/Kartu.jsx'

export default class Berita extends Component {
    state = {
        gaya: {
            direction: "row",
            alignItems: "center",
            justify: "center",
        }
        data: [],
        loading: false
    }

    componentDidMount() {
        Axios.get("")
            .then( response => {
                this.setState({
                    data: response.data.post,
                    loading: true
                })
            })
    }
    render() {
        const { alignItems, direction, justify } = this.state.gaya
        return (
            <Grid
                contaner
                alignItems={alignItems}>
                { this.state.loading ? (
                    <Grid item md={9} sm={12} >
                        <Kartu data={data} />
                    </Grid>
                    <Grid item md={3} sm={12}>
                    </Grid>
                ) : (
                    <Loading type='ball_triangle' width={100} height={100} fill='#f44242' />
                )}
            </Grid>
        );
    }
}
