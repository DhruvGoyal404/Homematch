// src/pages/Signin.jsx
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../components/Firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import googleLogo from '../assets/google.png';  // Import image using ES Modules

function Sign() {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      {/* <p className="continue-p">--Or continue with--</p> */}
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        {/* <img src={googleLogo} width={"60%"} /> */}
      </div>
    </div>
  );
}

export default Sign;
