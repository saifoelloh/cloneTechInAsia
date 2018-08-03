import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    const { classes } = props;
    return (
        <Grid container >
            <Grid md={4} sm={12}>
                <CardMedia
                    className={classes.media}
                    image={props.data.seo.image}
                    title=""
                />
            </Grid>
            <Grid md={8} sm={12}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.data.seo.title}
                    </Typography>
                    <Typography component="p">
                        {props.data.seo.description}
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(KartuSingular);

