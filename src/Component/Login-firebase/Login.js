import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
// const config = {
//   apiKey: '1:213350556824:web:ba1ccb4286e8051e1b5ced',
//   authDomain: 'data-test-22926.firebaseapp.com',
// };

// const uiConfig = {
//     signInFlow: 'redirect',
//     signInSuccessUrl: '/',
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,

//     ],
//   };

export default function Login() {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
  //     setIsSignedIn(!!user);
  //   });
  //   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  // }, []);
  // if (!isSignedIn) {
  //   return (
  //     <div className="login-name">
  //       <p>ĐĂNG NHẬP</p>
  //       <p>or login social accounts</p>
  //       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  //     </div>
  //   );
  // }
  return (
    <div className="login-name">
      {/* <p>
        <strong>{firebase.auth().currentUser.displayName}</strong>
        Đã Đăng Nhập!
      </p>

      <button className="btn btn-danger">
        <a onClick={() => firebase.auth().signOut()}>Đăng Xuất</a>
      </button> */}

            
    </div>
  );
}

