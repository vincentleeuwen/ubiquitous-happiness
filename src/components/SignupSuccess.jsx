import React from 'react';

import appStore from '../img/app-store.png';

const SignupSuccess = () => (
  <div>
    <p>
      <span className='complete' /> Great, you are all set.
    </p>
    <h1>Bravo, you can start listening to City of Thieves now.</h1>
    <p className='lead'>You can also get the free app to listen offline.</p>
    <div className='text-center'>
      <p>
        <br />
        <br />
        <img src={appStore} alt='Get the app on the app store' />
      </p>
    </div>
  </div>
);

export default SignupSuccess;
