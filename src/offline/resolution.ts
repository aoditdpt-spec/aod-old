import type { CaseRole } from "@/content/resolution";
import type { CaseStatus } from "@/lib/admin-store";
import { offline } from "@/offline/result";

export type CaseResult<T = object> = ({ ok: true } & T) | { ok: false; error: string };

export type TrackedCase = {
  id: string;
  createdAt: string;
  role: CaseRole;
  issue: string;
  bookingRef: string;
  otherParty?: string;
  incidentDate: string;
  outcome: string;
  status: CaseStatus;
  resolution?: string;
  steps: { status: CaseStatus; at: string }[];
};

export type CaseInput = {
  role: CaseRole;
  issue: string;
  throughAod: boolean;
  bookingRef: string;
  otherParty: string;
  incidentDate: string;
  description: string;
  outcome: string;
  evidence: string[];
  name: string;
  phone: string;
  email: string;
  agree: boolean;
  website?: string;
};

export async function createCase(_input: CaseInput): Promise<CaseResult<{ id: string }>> {
  return offline;
}
export async function trackCase(_id: string, _email: string): Promise<CaseResult<{ case: TrackedCase }>> {
  return offline;
}
export async function escalateCase(_id: string, _email: string, _reason: string): Promise<CaseResult> {
  return offline;
}
