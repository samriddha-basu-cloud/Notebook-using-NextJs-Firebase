import { auth } from '@/Lib/Firebase'
import { UserContext } from '@/Lib/UserContext';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {

  const [ user ] = useAuthState( auth );
  
  return (
    <UserContext.Provider value={ { user } }>
      <Toaster />
      <Component {...pageProps} />
    </UserContext.Provider>
  
  )
}
