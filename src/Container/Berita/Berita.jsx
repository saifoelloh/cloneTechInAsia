import React, {Component} from 'react';
import Axios from 'axios'
import Grid from '@material-ui/core/Grid';
import KartuSingular from '../../Components/Kartu/KartuSingular.jsx'
import Aux from '../../hoc/Auxiliary.jsx'
import Loading from '../../Components/Loading/Loading.jsx'

class Berita extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
            gaya: {
                direction: "row",
                alignItems: "center",
                justify: "center",
            },
            berita: -1
        }
        this.beritaHandler = this.beritaHandler.bind(this)
    }

    beritaHandler = (datum) => {
        console.log(datum);
        this.setState({
            berita: datum
        })
    }

    componentDidMount() {
        Axios.get("https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15/comment")
            .then( response => {
                console.log(response);
                this.setState({
                    loading: true,
                    data: response.data.posts
                })
            })
    }

    render() {
        const { alignItems, direction, justify } = this.state.gaya
        return (
            <Aux>
                { this.state.loading ? (
                    <Grid container >
                        <Grid item md={9} sm={12} >
                            { this.state.data.map( ( datum, key ) => {
                                return (
                                    <div>
                                        <KartuSingular data={datum} ubahHandler={()=>{this.beritaHandler()}}  kunci={key}/>
                                    </div>
                                )})
                            }
                        </Grid>
                        <Grid item md={3} sm={12}>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container >
                        <Grid item alignItems="center">
                            <Loading alignItems="center" />
                        </Grid>
                    </Grid>
                )}
            </Aux>
        )
    }
}
export default Berita
