import type { Company } from "@/content/business-portal";
import { offline } from "@/offline/result";

export type CompanyInput = {
  name: string;
  type: string;
  typeOther?: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  website: string;
  trap?: string;
};

type Saved = { ok: true; company: Company } | { ok: false; error: string };

export async function myCompany(): Promise<Company | null> {
  return null;
}
export async function registerCompany(_input: CompanyInput): Promise<Saved> {
  return offline;
}
export async function updateMyCompany(_input: Omit<CompanyInput, "email" | "trap">): Promise<Saved> {
  return offline;
}
