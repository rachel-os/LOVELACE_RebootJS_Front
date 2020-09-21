import axios from 'axios';
import { User } from '../users/types';
import { IProfile } from "../profile/types";
import { IConversation } from "../conversations/types";

// Fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profiles`, { withCredentials: true })
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
        // Jarred
        '5f636836b98b846189ef0407',
        // Dayna
        '5f636ed0e920a3750e76c458'
      ],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: '1',
          conversationId: '123azerty',
          createdAt: new Date(),
          emitter: '5f636836b98b846189ef0407',
          targets: [
            '5f636ed0e920a3750e76c458'
          ],
          content: 'Good morning!'
        },
        {
          _id: '2',
          conversationId: '123azerty',
          createdAt: new Date(),
          emitter: '5f636ed0e920a3750e76c458',
          targets: [
            '5f636836b98b846189ef0407'
          ],
          content: "Hey! what's up?"
        }
      ]
    },
    {
      _id: '123qwerty',
      targets: [
        // Dayna
        '5f636ed0e920a3750e76c458',
        // Favian
        '5f5b488b54b3c2162adc11b3'
      ],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: '1',
          conversationId: '123qwerty',
          createdAt: new Date(),
          emitter: '5f636ed0e920a3750e76c458',
          targets: [
            '5f5b488b54b3c2162adc11b3'
          ],
          content: 'Knock, knock...'
        },
        {
          _id: '2',
          conversationId: '123azerty',
          createdAt: new Date(),
          emitter: '5f5b488b54b3c2162adc11b3',
          targets: [
            '5f636ed0e920a3750e76c458'
          ],
          content: "Who's there?"
        }
      ]
    }
  ])
}