import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { Button, TextField, FormGroup, Container } from "@mui/material";

const UserLogin = () => {
  const [idp, setIdp] = useState("https://inrupt.net");

  const styles = {
    border: '1px solid white',
    borderRadius: 4,
    fontFamily: 'Roboto, sans-serif',
    color: 'white',
    backgroundColor: 'white',
  };

  return (
    <Container fixed>
      <FormGroup>
        <TextField 
          style={styles}
          label="Identity Provider"
          placeholder="Identity Provider"
          type="url"
          value={idp}
          onChange={(e) => setIdp(e.target.value)}
          InputProps={{
            endAdornment: (
              <LoginButton oidcIssuer={idp} redirectUrl={"http://localhost:3000/start"}>
                <Button variant="contained" color="primary">
                  Login
                  </Button>
              </LoginButton>
            ),
          }}
        />
      </FormGroup>
    </Container>
  );
}

export default UserLogin;