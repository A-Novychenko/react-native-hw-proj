import {auth} from "../../firebase/config";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {updateUserProfile, authStateChange, authSignOut} from "./authSlice";

export const authSignUpUser =
  ({email, password, login}) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      const user = auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: user.uid,
          login: user.displayName,
        })
      );
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser =
  ({email, password}) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await signOut(auth);
  dispatch(authSignOut());
};

export const authStateCahngeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        updateUserProfile({
          login: user.displayName,
          userId: user.uid,
        })
      );

      dispatch(
        authStateChange({
          stateChange: true,
        })
      );
    }
  });
};
