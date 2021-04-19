import React, { useEffect, useState } from 'react';
import login from '../Login-firebase/Login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
    apiKey: '1:213350556824:web:ba1ccb4286e8051e1b5ced',
    authDomain: 'data-test-22926.firebaseapp.com',
  };

  const uiConfig = {
      signInFlow: 'redirect',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  
      ],
    };

export default function Logo(){
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!isSignedIn) {
    return (
        <nav>
            <div className="login-name">
                    <p>ĐĂNG NHẬP</p>
                    {/* <p>or login social accounts</p> */}
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
        </nav>
      
    );
  }
  else{

    return (
        <nav>
            <div className="logo">
                <a href="/">TBOOK.vn</a>
                <a href="/login" className="nav-right">{firebase.auth().currentUser.displayName}</a>

                <button className="btn btn-danger">
                    <p className="p-dangnhap"  onClick={() => firebase.auth().signOut()}>Đăng Xuất</p>
                </button>
            </div>
        </nav>
    )

  }
}
