import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import GetAppIcon from '@mui/icons-material/GetApp';
    
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    
    export default function HomePage() {
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      return (
        <Card sx={{ maxWidth: 800 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">SZ</Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon href="https://twitter.com/intent/tweet?text=This is now the hottest on Sharezone! Join us now!"/>
              </IconButton>
            }
            title="THE HOTTEST ON SHAREZONE!"
            {...new Date().getFullYear()}
          />
          <CardMedia
            component="img"
            height="500"
            image="https://source.unsplash.com/random"
            alt="The most shared content"
          />
          <CardContent>
            <Typography variant="body5" color="text.secondary">
              Welcome to sharezone.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              <ReplyAllIcon />
              <ElectricBoltIcon />
              <FollowTheSignsIcon />
              <GetAppIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>ZONED OUT TOPICS:</Typography>
              <Typography paragraph>
                #Entertainment
              </Typography>
              <Typography paragraph>
                #Science
              </Typography>
              <Typography paragraph>
                #Technology
              </Typography>
              <Typography>
                #Art
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    }