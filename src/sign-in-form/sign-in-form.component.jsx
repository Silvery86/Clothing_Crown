import { useState} from "react"
import { 
     signInWithGooglePopup,
     signInAuthUserWithEmailAndPassword
     } 
from "../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import './sign-in-form.styles.scss'

const defaultFormFields = { 
    email:'',
    password:'',
}

const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

   
   
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields,[name]: value})
    }
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                case 'auth/wrong-password':
                    alert('incorect password for email');
                    break;
                default:
                    console.log(error);
            }                
        }
    }
    return (
    <div className="sign-in-container">
      <h2>Already have a account</h2>
      <span>Sign in with your email</span>
      <form onSubmit={handleSubmit}>
                 
            <FormInput
            label='Email'
            type='email' 
            required 
            onChange={handleChange}
            name="email"
            value={email}
            />

        
            <FormInput
            label='Password'
            type='password' 
            required 
            onChange={handleChange}
            name="password"
            value={password}
            />

          
            <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                    Sign In With Google
                </Button>
            </div>
            
      </form>
    </div>
  )
}
