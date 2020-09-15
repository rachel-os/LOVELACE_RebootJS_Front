import axios from 'axios';
import { User } from '../users/types';
import { IProfile } from "../profile/types";
import { IConversation } from "../conversations/types";

// Fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profiles`)
    .then(resp => {
      return resp.data
    })
}

// Connected profile
export function getConnectedProfile(): Promise<User> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profiles/me`, { withCredentials: true })
    .then(resp => resp.data)
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
  lastname: string): Promise<IProfile> {
  return axios.post(`${process.env.REACT_APP_BACKEND}/profile`, { email, password, firstname, lastname })
    .then(resp => resp.data);
}

// je crée un mock (un peu brutal ^^) pour les conversations provisoirement 
export function getConversations(): Promise<IConversation[]> {
  return Promise.resolve([
    {
      _id: '123azerty',
      targets: [
        '5f521cb85729344b47bb4094',
        '5f5e81834a955217b8ca5166'
      ],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: '1',
          conversationId: '123azerty',
          createdAt: new Date(),
          emitter: '5f521cb85729344b47bb4094',
          targets: [
            '5f5e81834a955217b8ca5166'
          ],
          content: 'Good morning!'
        },
        {
          _id: '2',
          conversationId: '123azerty',
          createdAt: new Date(),
          emitter: '5f5e81834a955217b8ca5166',
          targets: [
            '5f521cb85729344b47bb4094'
          ],
          content: "Hey! what's up?"
        }
      ]
    },
    {
      _id: '123qwerty',
      targets: [
        '5f5b486f54b3c2162adc11b2',
        '5f521cb85729344b47bb4094'
      ],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: '1',
          conversationId: '123qwerty',
          createdAt: new Date(),
          emitter: '5f5b486f54b3c2162adc11b2',
          targets: [
            '5f521cb85729344b47bb4094'
          ],
          content: 'Knock, knock...'
        },
        {
          _id: '2',
          conversationId: '123azerty',
          createdAt: new Date(),
          emitter: '5f521cb85729344b47bb4094',
          targets: [
            '5f5b486f54b3c2162adc11b2'
          ],
          content: "Who's there?"
        }
      ]
    }
  ])
}