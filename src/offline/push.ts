import { offline } from "@/offline/result";

export type PushSub = { endpoint: string; keys: { p256dh: string; auth: string } };
type Result = { ok: true } | { ok: false; error: string };

export async function savePushSubscription(_sub: PushSub, _as: "staff" | "artist"): Promise<Result> {
  return offline;
}
export async function removePushSubscription(_endpoint: string): Promise<Result> {
  return offline;
}
export async function sendTestNotification(_as: "staff" | "artist"): Promise<{ ok: true; sent: number } | { ok: false; error: string }> {
  return offline;
}
