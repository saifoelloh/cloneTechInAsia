import React from 'react'
import Axios from 'axios'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import { RingLoader } from 'react-spinners';
import KartuSingular from './KartuSingular.jsx'
import Aux from '../../hoc/Auxiliary.jsx'



export default class Kartu extends React.Component {

    state = {
        data: [],
        loading: false,
        tengah: {
            textAlign: 'center',
        }
    }

    componentDidMount() {
        Axios.get("https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15")
            .then( response => {
                console.log(response)
                this.setState({
                    data: response.data.posts,
                    loading: true
                })
            })
    }

    render(){
        return (
            <Aux>
                { this.state.loading ? (
                    <Grid container spacing={16}>
                        {
                            this.state.data.map( ( datum, index ) => {
                                return (
                                    <Grid item xs={12}>
                                        <KartuSingular data={ datum } />
                                    </Grid>
                                )})
                        }
                    </Grid>
                    ) : (
                        <Grid container alignItems="center">
                            <Grid item >
                                <CircularProgress style={{ color: purple[500] }} thickness={7} />
                            </Grid>
                        </Grid>
                    )
                }
            </Aux>
        )
    }
}
