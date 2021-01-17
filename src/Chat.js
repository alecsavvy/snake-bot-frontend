import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Chat = () => (
  <Card style={{ height: "100%" }}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h5" component="h2">
        LemonadeJetpack
      </Typography>
      <Typography color="textSecondary">this is a bio</Typography>
      <Typography variant="body2" component="p">
        inspirational comment?
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <div style={{ padding: "1%", height: "100%" }}>
      <iframe
        title="this has to be unique"
        src="https://www.twitch.tv/embed/lemonadejetpack/chat?parent=localhost"
        height="80%"
        width="99%"
      ></iframe>
    </div>
  </Card>
);

export default Chat;
