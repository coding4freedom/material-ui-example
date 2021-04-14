import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import React from 'react';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #aeb, #000)',
    border: 0,
    borderRadius: 15,
    marginBottom: 12,
    color: 'white',
    padding: '0 30px'
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

// creating our own button and applying custom styles using material-ui
function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return(
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        }
        label='Testing Material-UI' 
      />
      
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField 
            variant='outlined'
            color='primary'
            type='date'
          />
          <CheckboxExample />
          <ButtonGroup>
            <Button
              startIcon={<CloudUploadIcon />}
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                backgroundColor: 'silver'
              }} 
              onClick={() => alert('You have entered coding grounds!')} variant="contained"           
            >
              Coding Space
            </Button>
          
            <Button
              startIcon={<SaveIcon />}
              style={{
                fontSize: 12,
                fontWeight: 'bold',                
              }} 
              onClick={() => alert('You have entered coding grounds!')} variant="contained"
              color='primary'           
            >
              Coding Grounds
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
