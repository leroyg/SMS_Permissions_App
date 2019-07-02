import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import {Link} from 'react-router-dom'




const Footer = () => {
    return (
        
<AppBar position="static"   style={{padding: '15px 0', color:'black',background:'#30027e',width:'50%',boxShadow:'none'}}>
        <Toolbar>
     
          <Typography variant="h6" style={{flexGrow: 1,display:'flex',justifyContent:'center',flexDirection:'column'}}>
          Permisson.ly

 <Link to='/' style={{color:'inherit' , textDecoration:'none'}} >
          <Button color="inherit">
         Home
          </Button>

</Link>


<Link to='/about_Us' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">About Us</Button>
</Link>

<Link to='/register' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">Register</Button>
</Link>


<Link to='/login' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">Login</Button>
</Link>





          </Typography>

<div style={{display:'flex',justifyContent:'center',flexDirection:'column',fontSize:'.8rem'}}>
<h2>Privacy Policy</h2>
<h2>Terms and Conditons</h2>
</div>
        </Toolbar>
      </AppBar>
    );
};

export default Footer;