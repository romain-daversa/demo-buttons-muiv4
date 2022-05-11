import "./styles.css";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import PollIcon from "@material-ui/icons/Poll";
import GroupIcon from "@material-ui/icons/Group";
import StarsIcon from "@material-ui/icons/Stars";
import WebIcon from "@material-ui/icons/Web";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SchoolIcon from "@material-ui/icons/School";

const data = [
  {
    text: "SharePoint Initiative Offer",
    color: "#008e5c",
    icon: <DescriptionIcon fontSize="large" />
  },
  {
    text: "New Site Request Form",
    color: "#59b49f",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    text: "Expression of Needs Model",
    color: "#007084",
    icon: <PollIcon fontSize="large" />
  },
  {
    text: "Access Management Model",
    color: "#878787",
    icon: <GroupIcon fontSize="large" />
  },
  {
    text: "Compliance Style Charter",
    color: "#b4c832",
    icon: <StarsIcon fontSize="large" />
  },
  {
    text: "Owners SP Golden RUles",
    color: "#e9b538",
    icon: <WebIcon fontSize="large" />
  },
  {
    text: "Confidentiality Level",
    color: "#f39476",
    icon: <VerifiedUserIcon fontSize="large" />
  },
  {
    text: "Digital Working SP Training",
    color: "#887d95",
    icon: <SchoolIcon fontSize="large" />
  }
];

export default function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={10}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {data.map((row) => (
            <Grid item sm={3} key={row.text}>
              <Card
                style={{
                  background: row.color,
                  color: "white",
                  height: "100%",
                  textAlign: "center"
                }}
              >
                <CardActionArea>
                  <CardContent>
                    {row.icon}
                    <Typography>{row.text}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
