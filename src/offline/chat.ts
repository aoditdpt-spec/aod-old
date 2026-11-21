import { offline } from "@/offline/result";

export type ChatMessage = {
  id: string;
  fromArtist: boolean;
  sender: string;
  body: string;
  at: string;
  read: boolean;
};
export type ChatSummary = Record<string, { last: { body: string; at: string; fromArtist: boolean }; unread: number }>;

export type ChatResult<T = object> = ({ ok: true } & T) | { ok: false; error: string };

export async function staffChatSummary(): Promise<ChatResult<{ summary: ChatSummary; unread: number }>> {
  return offline;
}
export async function staffChatOpen(_artistId: string): Promise<ChatResult<{ messages: ChatMessage[] }>> {
  return offline;
}
export async function staffChatSend(_artistId: string, _body: string): Promise<ChatResult<{ message: ChatMessage }>> {
  return offline;
}
export async function artistChatLoad(_markRead: boolean): Promise<ChatResult<{ messages: ChatMessage[]; unread: number }>> {
  return offline;
}
export async function artistChatSend(_body: string): Promise<ChatResult<{ message: ChatMessage }>> {
  return offline;
}
