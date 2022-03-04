import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  Tablehead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  TextField,
  Button,
  TableHead,
} from "@material-ui/core";
import { deepPurple, green, orange } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  hedingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Box textAlign="center" className={classes.hedingColor} p={2} mb={2}>
        <Typography variant="h2">React Crud With Api Call</Typography>
      </Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.stuListColor}>
            <Typography variant="h4">Student List</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#616161" }}>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    No
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    Name
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    Email
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeadCell}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">Sonam</TableCell>
                  <TableCell align="center">sonam@example.com</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to="/view/1">
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to="/edit/1">
                          <EditIcon/>
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon color="secondary"/>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
