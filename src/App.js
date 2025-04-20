import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebase';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider
} from 'firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      navigate('/home');
    });
  };

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      navigate('/home');
    });
  };

  const signInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      navigate('/home');
    });
  };

  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider).then((result) => {
      console.log(result.user);
      navigate('/home');
    });
  };

  return (
    <div>
      <h2>Login or Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signInWithEmail}>Sign In</button>
      <button onClick={signUpWithEmail}>Sign Up</button>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithGithub}>Sign in with GitHub</button>
    </div>
  );
};

export default App;
//done sign in


