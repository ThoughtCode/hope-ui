import React from 'react';

// Components
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from 'material-ui';

// Css
import cls from './Service.css';

const service = props => {
  return (
    <Grid onClick={() => props.clicked(props.id)} className={cls.Service} item xs={12} sm={6} md={4} lg={4}>
      <Card className={cls.Card}>
        <CardMedia
          className={cls.Media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent className={cls.CardContent}>
          <Typography
            className={cls.Typo}
            gutterBottom
            variant="title">
            {props.name}
          </Typography>
        </CardContent>
      </Card>      
    </Grid>
  );
}

export default service;