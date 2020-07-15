import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Fade } from 'react-reveal';

function ScoreCard({ source }) {
  const data = source.slice(1).map((player) => ({
    name: player[0],
    value: player[player.length - 1]
  }));

  data.sort((a, b) => b.value - a.value);

  return (
    <Fade right duration={1000} distance="40px">
      <List>
        {data.map((d, idx) => (
          <React.Fragment key={d.name}>
            <ListItem>
              <ListItemText primary={d.name} />
              <Typography variant="h5" color="textSecondary">
                {d.value}
              </Typography>
            </ListItem>
            {idx < data.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Fade>
  );
}

export default ScoreCard;
