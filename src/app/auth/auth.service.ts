import { Injectable, NgZone, inject } from '@angular/core';
import { UserDetails } from '../shared/interfaces/user.interface';
import { Auth, GoogleAuthProvider, User, UserCredential, UserMetadata, authState, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private afAuth = inject(Auth); // Inject Firebase auth service
  userInfo!: User | null; // Save logged in user data
  authState = authState(this.afAuth);

  constructor(
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in sessionStorage when 
    logged in and setting up null when logged out */
    this.authState.subscribe((user: User | null) => {
      if (user) {
        this.userInfo = user;
        sessionStorage.setItem('user', JSON.stringify(this.userInfo));
      } else {
        sessionStorage.setItem('user', 'null');
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password)
      .then((result: any) => {
        this.SetUserData(result.user);
        this.authState.subscribe((user: any) => {
          if (user) {
            this.router.navigate(['portal']);
          }
        });
      })
      .catch((error: Error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth, email, password)
      .then((result: any) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.sendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error: Error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    const currentUser = this.afAuth.currentUser;
    if (currentUser) {
      sendEmailVerification(currentUser)
        .then(() => {
          this.router.navigate(['verify-email-address']);
        })
        .catch((err) => console.error(err));
    } else {
      alert('User not found!');
    }
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.afAuth, passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error: Error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    return user !== null && user.emailVerified !== false ? true : false;
  }

  async getUserInfo(): Promise<User | null> {
    const user = await firstValueFrom(this.authState);
    return user;
  }

  // Sign in with Google
  GoogleAuth(): Promise<UserCredential> {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any): Promise<UserCredential> {
    return signInWithPopup(this.afAuth, provider)
      .then((result: any) => {
        this.ngZone.run(() => {
          setTimeout(() => {
            this.router.navigate(['portal'])
          }, 100);
          // window.location.href = 'dashboard';
        });
        // console.log(result);
        this.SetUserData(result.user);
        return result;
      })
      .catch((error: Error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    /* const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    ); */
    const userData: UserDetails = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    console.log(user);
    /* userRef.set(userData, {
      merge: true,
    }); */
    return userData;
  }

  // Sign out
  signOut() {
    return signOut(this.afAuth).then(() => {
      sessionStorage.removeItem('user');
      this.userInfo = null;
      this.router.navigate(['sign-in']);
    });
  }
}