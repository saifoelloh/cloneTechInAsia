import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tombol from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const KartuSingular = (props) => {
    const { classes } = props
    const key = props.kunci
    return (
        <Grid container style={{paddingRight:"5%", paddingLeft:"5%", marginBottom: "2%", marginTop: "2%"}} spacing={24}>
            <Grid item md={4} sm={12}>
                <img src={props.data.seo.image} alt={props.data.seo.title} style={{maxWidth:"100%"}} />
            </Grid>
            <Grid item md={8} sm={12}>
                <Typography gutterBottom variant="headline" component="h2">
                    {props.data.seo.title}
                </Typography>
                <Typography component="p">
                    {props.data.seo.description}
                </Typography>
                <hr />
                <Grid container justify="space-between">
                    <Grid item >
                        <Grid container alignItems="center" direction="row" spacing={24}>
                            <Grid item >
                                <Avatar alt={props.data.author.display_name} src={props.data.author.avatar_url} className={classes.avatar} />
                            </Grid>
                            <Grid item >
                                <Typography variant="caption"> {props.data.author.display_name} </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Tombol
                            onClick={()=>{props.ubahHandler(key)}}
                            alignItems="right"
                            variant="outlined" color="primary">
                            Read more..
                        </Tombol>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(KartuSingular);

