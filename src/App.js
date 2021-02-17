import { Typography, Grid, CssBaseline, Paper, Avatar, TextField,Checkbox, FormControlLabel, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { KingBed } from "@material-ui/icons";


const hello = makeStyles ({
    root: {
      height:'100vh',
    },
    image: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1510873660878-bdf8de0ed851?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1062&q=80)',
      height:"100vh",
      objectFit:"cover",
    },
    paper: {
      padding:"50px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      background: "red",
      marginBottom:"10px",
    },
    form: {
      width: '100%',
      marginTop:"20px",
      display:'flex',
      flexDirection:'column'
    },

    link: {
      display:'flex',
      justifyContent:'space-between',
      alignItems: 'cnter',
      width:"90%",
      marginTop:"10px",
    },

});

function App() {
  const classes = hello();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">ورد به پنل</Typography>
          <form className={classes.form}>
            <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="آدرس ایمیل"
            name="email"
            autoComplete="email"
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label='پسورد'
            id="password"
            autoComplete="password"
             />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="مرا به خاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link>رمز عبور خود را فرامشو کرده اید؟</Link>
              </Grid>
              <Grid item>
                <Link>آیا حساب کابری دارید؟</Link>
              </Grid>
            </Grid>

          </form>
        </div>
      </Grid>

    </Grid>
  );
}

export default App;
