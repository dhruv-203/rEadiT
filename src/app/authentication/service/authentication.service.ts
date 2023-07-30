import { Injectable } from '@angular/core';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, authState, Auth, updateProfile, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  registerWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  getAuthState(): Observable<User | null> {
    return authState(this.auth)
  }

  logout() {
    return signOut(this.auth)
  }


  updateProfile(user: User, username?: string | null, photoURL?: string | null) {
    return updateProfile(user, { displayName: username, photoURL: photoURL })
  }
}

