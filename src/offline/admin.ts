import type { Activity, Db, Session, Settings } from "@/lib/admin-store";
import { offline } from "@/offline/result";

export type Collection = "applications" | "artists" | "bookings" | "payments" | "payouts" | "leads" | "cases" | "posts" | "subscribers" | "newsletters" | "team";

export type AdminChanges = {
  added: Partial<Record<Collection, unknown[]>>;
  changed: Partial<Record<Collection, { before: unknown; after: unknown }[]>>;
  removed: Partial<Record<Collection, string[]>>;
  settings?: Settings;
  activity: Activity[];
};

export type SaveResult = { ok: true } | { ok: false; error: string };

export async function adminSession(): Promise<Session | null> {
  return null;
}
export async function loadAdminDb(): Promise<Db | null> {
  return null;
}
export async function saveAdminChanges(_changes: AdminChanges): Promise<SaveResult> {
  return offline;
}
export async function uploadArtistPhoto(_table: "applications" | "artists", _id: string, _dataUrl: string): Promise<{ ok: true } | { ok: false; error: string }> {
  return offline;
}
