import { auth, googleAuthProvider} from "@/Lib/Firebase";
import { UserContext } from "@/Lib/UserContext";
import { useContext } from "react";

export default function Login() {
    const { user } = useContext( UserContext );

    const googleSignIn = async () => {
         await auth.signInWithPopup( googleAuthProvider );
    }

    const googleSignOut = async () => {
        await auth.signOut();
    }

    return(
        user ? 
            <button onClick={googleSignOut} className="btn btn-light"> Sign Out { user.displayName } </button> 
        :
            <button onClick={googleSignIn} className="btn btn-light"> Sign In </button>
    );
}