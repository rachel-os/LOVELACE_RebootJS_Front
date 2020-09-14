import axios from 'axios';
import { User } from '../users/types';
import { IProfile } from "../profile/types";

// Fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profile`)
    .then(resp => {
      return resp.data
    })
}

// Connected profile
export function getConnectedProfile(): Promise<User> {
  return axios.get( `${process.env.REACT_APP_BACKEND}/profile/me`, { withCredentials: true }
  ).then(resp => resp.data)
}

// Login
export function login(email: string, password: string): Promise<IProfile> {
  return axios
    .post(
      `${process.env.REACT_APP_BACKEND}/login`,
      {
        username: email,
        password: password
      },
      {
        withCredentials: true
      })
    .then(resp => resp.data);
}

// Register
export function register(
  email: string, 
  password: string, 
  firstname: string, 
  lastname: string) : Promise<IProfile> {
  return axios.post(`${process.env.REACT_APP_BACKEND}/profile`, { email, password, firstname, lastname })
    .then(resp => resp.data);
  }