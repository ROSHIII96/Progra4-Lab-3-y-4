import { useContext } from 'react';
import { AuthContext, AuthProvider } from '../Context/AuthContext';
import {useUserState} from '../Hooks/useUserState';

export default function Login(){

  const {setUser} = useContext(AuthContext);
  const {error, emailRef, passwordRef, login, setError} = useUserState();

      const handleLogin = () => {
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         const isSuccess = login(email, password);
         if(!isSuccess)   
         {
          setError("Credenciales incorrectas");
         }  
         else
         {
          setUser({email});
         }
      }

    return(
            <div>
                <input 
                type="email"
                placeholder='Correo'
                ref={emailRef}
                />
                <br/>
                <input
                type="password"
                placeholder='Contraseña'
                ref={passwordRef}
                />
                <br/>
                <button onClick = {handleLogin}>Ingresar</button>
                { error && <p style={{ color: "red" }}>{error}</p> }
              </div>
    )
}