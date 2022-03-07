import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green,orange } from "@material-ui/core/colors";
import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles({
  hedingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});



const Edit = () => {
  const classes = useStyle();
  const {id} = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({stuname:"", email: ""});


  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        // console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("something is wrong");
      }
    }
    
    getStudent();
  }, []);

  function onTextFieldChange(e){
    setStudent({...student,[e.target.name]: e.target.value})
    console.log(student);
  }
  async function onFormSubmit(e){
    e.preventDefault()
      try {
         await axios.put(`http://localhost:3333/students/${id}`,student);
         navigate('/');
      } catch (error) {
        console.log("something is wrong");
      }
    
  }
  function handleClick(){
    navigate('/');
  }
  return (
    <>
      <Box textAlign="center" className={classes.hedingColor} p={2} mb={2}>
        <Typography variant="h2">React Crud With Api Call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
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
                  value={student.stuname}
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
                  value={student.email}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={e =>onFormSubmit(e)}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button type='button' variant="contained" color="primary" onClick={handleClick} >
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
