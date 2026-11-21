import type { CustomerOrder } from "@/content/my-bookings";
import { offline } from "@/offline/result";

export type MyOrders = { email: string; orders: CustomerOrder[]; topic: string };

export async function myOrders(): Promise<MyOrders | null> {
  return null;
}
export async function submitReview(_bookingId: string, _rating: number, _text: string): Promise<{ ok: true } | { ok: false; error: string }> {
  return offline;
}
export async function cancelMyBooking(_bookingId: string): Promise<{ ok: true } | { ok: false; error: string }> {
  return offline;
}
