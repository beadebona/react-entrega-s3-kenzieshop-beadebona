import { Button, TextField } from "@mui/material"
import StyledForm from "./style"
const Form = () =>{
    return(
        <StyledForm>               
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" size="large">
            LOGIN
        </Button>
        </StyledForm>
    )
}

export default Form