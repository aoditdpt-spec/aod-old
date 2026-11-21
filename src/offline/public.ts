import type { Audience } from "@/content/site";
import type { Brief } from "@/content/artist-brief";
import type { WorkDetails } from "@/lib/artist-store";
import { offline } from "@/offline/result";

export type SaveResult<T = object> = ({ ok: true } & T) | { ok: false; error: string; verify?: boolean };

export type BookingRequestInput = {
  audience?: Audience;
  occasion: string;
  needs: { category: string; count: number }[];
  date: string;
  startTime: string;
  endTime: string;
  city: string;
  details: string;
  brief?: Brief;
  name: string;
  phone: string;
  email: string;
  website?: string;
};

export type ApplicationInput = {
  work?: WorkDetails;
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  city: string;
  locality: string;
  category: string;
  otherCategories?: string[];
  services: string[];
  experience: string;
  languages: string[];
  bio: string;
  links: string[];
  photo?: string;
  agreeTerms: boolean;
  website?: string;
};

export async function createBookingRequest(_input: BookingRequestInput): Promise<SaveResult<{ ref: string }>> {
  return offline;
}
export async function createApplication(_input: ApplicationInput): Promise<SaveResult<{ id: string }>> {
  return offline;
}
