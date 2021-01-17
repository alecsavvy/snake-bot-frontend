import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Chat from "./Chat";
import Commands from "./Commands";

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Snakey Bot</Typography>
      </Toolbar>
    </AppBar>
    <Grid container>
      <Grid item xs={8} style={{ padding: "1%" }}>
        <Commands />
      </Grid>
      <Grid item xs={4}>
        <Chat />
      </Grid>
    </Grid>
  </div>
);

export default App;
