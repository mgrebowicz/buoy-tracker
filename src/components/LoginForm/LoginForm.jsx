import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput 
              id="component-outlined"
              label="Email" 
              type="text" 
              name="email" 
              value={credentials.email} 
              onChange={handleChange}
              required 
              />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput 
              label="Password" 
              variant="outlined"
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required
            />
          </FormControl>
          {/* <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required /> */}
          {/* <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required /> */}
          <Button variant="contained" color="secondary" type="submit">LOG IN</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}