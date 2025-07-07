import { useEffect } from "react";
// OR const appleSignin = require('apple-signin-auth');
// OR import { getAuthorizationUrl } from 'apple-signin-auth';

const ngrok = "https://bb15-2804-7f0-9603-4cc2-92b-a627-599-15a.ngrok-free.app";

export default function Home() {
const options = {
  // clientID: "app.ngrok-free.9be0-2804-7f0-9603-19bb-4892-9150-6839-cd37",
  clientID: "com.maximustribe.local",
  redirectUri: `${ngrok}/auth/apple`,
  // OPTIONAL
  state: 'state', // optional, An unguessable random string. It is primarily used to protect against CSRF attacks.
  responseMode: 'form_post', // Force set to form_post if scope includes 'email'
  scope: 'email' // optional
};
  useEffect(() => {
    if ((window as any).AppleID) {
      // AppleID.auth.init({
      //   clientId: options.clientID,
      //   scope: options.scope,
      //   redirectURI: options.redirectUri,
      //   state: options.state,
      //   usePopup: true,
      // });
      (window as any).AppleID.auth.init({
        clientId: options.clientID,
        // clientId: 'com.techulus.client',
        scope: 'name email',
        redirectURI: options.redirectUri
      });
    }
  }, [options]);
  console.log("dale")
  return (
    <>
    <h1>LOL1</h1>
    <h1>LOL1</h1>
    <h1>LOL1</h1>
    <h1>LOL1</h1>
    <h1>LOL1</h1>
    </>
  );
}
