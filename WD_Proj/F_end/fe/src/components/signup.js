import { TextField, Button } from '@mui/material';
import { useFormik } from "formik";
import axios from 'axios';
import { NotificationManager } from "react-notifications";

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          role: ''
        },
        onSubmit:async (values) => {
          const response = await axios.post('http://localhost:5600/auth/signup',values);
          NotificationManager.success(response.data.msg);
        },
      });
    
    return (
          
        <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={formik.handleSubmit}
      >  
              
            <TextField 
                onChange={formik.handleChange} value={formik.values.firstName} 
                name="firstName" 
                label="FirstName" 
                variant="outlined" />

            <TextField 
                onChange={formik.handleChange} value={formik.values.lastName} 
                name="lastName" 
                label="LastName" 
                variant="outlined" />    

              <TextField 
                onChange={formik.handleChange} value={formik.values.email} 
                name="email" 
                label="Email" 
                variant="outlined" />
              
              <TextField 
                onChange={formik.handleChange} value={formik.values.password} 
                name="password" 
                label="Password"
                 
                variant="outlined" />
              
              <TextField 
                onChange={formik.handleChange} value={formik.values.role} 
                name="role" 
                label="Role" 
                variant="outlined" />
              
              <Button type="Submit" variant="contained">signUp</Button>
            </form>  
         
    )
}

export default SignUp;