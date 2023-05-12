import {db, auth} from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {authSlice} from "./authSlice";

export const authSignUpUser =
  ({email, password, login}) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await db.auth().currentUser;

      await user.updateUserProfile({displayName: login});

      const {uid, displayName} = await db.auth().currentUser;
      console.log("uid", uid);
      console.log("displayName", displayName);

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          login: displayName,
        })
      );
      //   console.log("user", user);
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

export const authSignOutUser = () => async (dispatch, getState) => {};

export const authStateCahngeUser = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChanged((user) => setUser(user));
};

//   onAuthStateChanged(auth, (user) => {
//     console.log("user!!!", user);
//     if (user) {
//       setIsLogin(user.uid);
//     }
//   });
