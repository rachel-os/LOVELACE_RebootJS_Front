import axios from 'axios';
import { User } from '../users/types';
import { IProfile } from "../profile/types";
import { IConversation, IConversationMessage } from "../conversations/types";

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

// Get conversations
export async function getConversations(connectedUser: User): Promise<IConversation[]> {
  //Fetch des messages à l'API
  const resp = await axios.get(`${process.env.REACT_APP_BACKEND}/messages`, { withCredentials: true })
  const messages: IConversationMessage[] = resp.data;

  //Traitement sur les messages : messages => conversations
  if (messages.length === 0) return []

  const batches = messages.reduce<{ [conversationId: string]: IConversationMessage[] }>(
    (acc, message) => ({
      ...acc,
      [message.conversationId]: [...(acc[message.conversationId] || []), message],
    }),
    {},
  );

  const conversations: IConversation[] = [];
  for (const conversationId in batches) {
    const messages = batches[conversationId];

    const attendees = [...new Set(messages.flatMap(({ emitter, targets }) => [emitter, ...targets]))];

    const targets = attendees.filter((id) => id !== connectedUser._id);

    conversations.push({
      _id: conversationId,
      targets: targets,
      messages: messages,
      updatedAt: getLastMessageDate(messages),
      unseenMessages: 0
    })
  }
  return conversations;
}

export async function getConversation(conversationId: string): Promise<IConversation[]> {
  const resp = await axios.get(`${process.env.REACT_APP_BACKEND}/messages/${conversationId}`, { withCredentials: true })
  return resp.data;
}

export async function sendMessage(conversationId: string, targets: string[], content: string) {
  const resp = await axios.post(`${process.env.REACT_APP_BACKEND}/messages`,
    { conversationId, targets, content },
    { withCredentials: true });
  return resp.data;
}

function getLastMessageDate(messages: IConversationMessage[]) {
  return messages[messages.length - 1].createdAt;
} 	
