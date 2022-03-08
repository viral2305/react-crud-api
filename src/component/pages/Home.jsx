import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green} from "@material-ui/core/colors";
import List from '../student/List'
import axios from "axios";
import {useEffect, useRef, useState} from 'react'
import toastMsg from '../../toastMsg';

const useStyle = makeStyles({
  hedingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  }
});

const Home = () => {
  
  const classes = useStyle();
  const [student, setStudent] = useState({stuname: "", email: ""});
  const [status, setStatus] = useState();
  const reference = useRef(null);
  

  

  function onTextFieldChange(e){
    setStudent({...student,[e.target.name]: e.target.value})
    // console.log(student);
    
  }
  // useEffect(()=> {
    
  // },[student])

  async function onFormSubmit(e){
    e.preventDefault()
    
      try {
        
         await axios.post(`http://localhost:3333/students`,student);
         toastMsg("Item Addes Succesfully");
         setStatus(true);
      } catch (error) {
        console.log("something is wrong");
      }
      console.log(reference.current);
  }
   
  if(status){
    return <Home />
  }

  return (
    <>
      <Box textAlign="center" className={classes.hedingColor} p={2} mb={2}>
        <Typography variant="h2">React Crud With Api Call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form onSubmit={e => onFormSubmit(e)}>
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
                  onChange={e => onTextFieldChange(e)}
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
                  onChange={e => onTextFieldChange(e)}
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
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
