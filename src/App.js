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
  <div style={{ height: "100%" }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Snakey Bot</Typography>
      </Toolbar>
    </AppBar>
    <Grid container style={{ height: "100%" }}>
      <Grid item xs={8} style={{ padding: "1%" }}>
        <div style={{ margin: "1%" }}>Base Commands</div>
        <Commands />
        <div style={{ margin: "1%" }}>Custom Commands</div>
        <Commands />
      </Grid>
      <Grid item xs={4} style={{ height: "90vh" }}>
        <Chat />
      </Grid>
    </Grid>
  </div>
);

export default App;
