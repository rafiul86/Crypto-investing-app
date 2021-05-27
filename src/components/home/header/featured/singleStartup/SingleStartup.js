import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const SingleStartup = ({singleStartup}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
      <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {singleStartup.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {singleStartup.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"><Link to={`/incubator/${singleStartup.id}`}>Learn More</Link></Button>
      </CardActions>
    </Card>
    );
};

export default SingleStartup;

