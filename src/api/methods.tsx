import axios from 'axios';
import { User } from '../users/types';
import { IProfile } from "../profile/types";

// Fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get('http://localhost:3000/profile')
    .then(resp => {
      return resp.data
    })
} 

// Login
export function login(email: string, password: string): Promise<IProfile>{
  return axios
    .post(
      'http://localhost:3000/login',
      {
        username: email,
        password: password
      })
    .then(resp => resp.data)
} 	
