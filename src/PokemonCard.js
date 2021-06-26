import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PokemonCard({ url }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const classes = useStyles();
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(url);
      const data = await response.json();

      setName(data.name);
      setImageUrl(data.sprites.other['official-artwork'].front_default);
    }

    getPokemon();
  })

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={imageUrl}
          title={`Image of the pokemon ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
