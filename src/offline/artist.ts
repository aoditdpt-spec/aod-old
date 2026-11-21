import type { BookingStatus as PortalStatus } from "@/content/artist-portal";
import type { ArtistProfile } from "@/lib/artist-store";
import type { ApplicationStatus, PortfolioFile } from "@/lib/admin-store";
import { offline } from "@/offline/result";

export type Result = { ok: true } | { ok: false; error: string };

export type PortalBooking = {
  id: string;
  ref?: string;
  event: string;
  service: string;
  date: string;
  city: string;
  budget: string;
  note?: string;
  brief?: { label: string; value: string }[];
  status: PortalStatus;
  quote?: string;
  team?: number;
};

export type PortalFile = PortfolioFile & { url: string };

export type ArtistPortal = {
  email: string;
  kind: "artist" | "applicant";
  id: string;
  applicationStatus?: ApplicationStatus;
  meeting?: { at: string; place: string };
  stage: number;
  identityVerified: boolean;
  appliedAt?: string;
  approvedAt?: string;
  sentToAodAt?: string;
  profile: ArtistProfile;
  bookings: PortalBooking[];
  blockedDates: string[];
  portfolio: PortalFile[];
  topics: string[];
};

export type PortalLoad = { state: "signed-out" } | { state: "no-account"; email: string } | { state: "ready"; data: ArtistPortal };

export type ProfilePatch = Partial<Pick<ArtistProfile, "phone" | "dob" | "city" | "locality" | "services" | "experience" | "languages" | "bio" | "links" | "work">>;

export type SendResult = { ok: true; at: string } | { ok: false; error: string };

export async function loadArtistPortal(): Promise<PortalLoad> {
  return { state: "signed-out" };
}
export async function saveArtistProfile(_patch: ProfilePatch): Promise<Result> {
  return offline;
}
export async function saveMyPhoto(_dataUrl: string): Promise<Result> {
  return offline;
}
export async function sendToAod(): Promise<SendResult> {
  return offline;
}
export async function saveAvailability(_dates: string[]): Promise<Result> {
  return offline;
}
export async function replyToBooking(_bookingId: string, _status: "accepted" | "declined", _note?: string): Promise<Result> {
  return offline;
}
export async function startPortfolioUpload(_name: string, _type: string, _size: number): Promise<({ ok: true } & { path: string; token: string }) | { ok: false; error: string }> {
  return offline;
}
export async function finishPortfolioUpload(_path: string, _name: string, _type: string, _size: number): Promise<Result> {
  return offline;
}
export async function removePortfolioFile(_path: string): Promise<Result> {
  return offline;
}
