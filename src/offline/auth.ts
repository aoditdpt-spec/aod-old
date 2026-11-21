import { offline } from "@/offline/result";

export type Result = { ok: true } | { ok: false; error: string };

export async function requestCode(_email: string, _who: "staff" | "customer" | "artist" | "business" | "business-new"): Promise<Result> {
  return offline;
}
export async function verifyCode(_email: string, _code: string): Promise<Result> {
  return offline;
}
export async function signOutAction(): Promise<void> {}
export async function signedInEmail(): Promise<string | null> {
  return null;
}
