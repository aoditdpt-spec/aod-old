import { offline } from "@/offline/result";

export type NewsletterResult<T = object> = ({ ok: true } & T) | { ok: false; error: string };

export async function subscribe(_input: { email: string; source?: string; website?: string }): Promise<NewsletterResult> {
  return offline;
}
export async function confirmSubscription(_token: string): Promise<NewsletterResult> {
  return offline;
}
export async function unsubscribe(_token: string): Promise<NewsletterResult> {
  return offline;
}
export async function sendNewsletter(_id: string, _subject: string, _body: string, _mode: "test" | "all"): Promise<NewsletterResult<{ sent: number }>> {
  return offline;
}
