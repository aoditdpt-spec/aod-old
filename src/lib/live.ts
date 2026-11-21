"use client";

// Live updates. aod-old has no backend, so there is nothing to listen to: every page works on the
// data kept in this browser, and these keep the interface the pages use (always "off").

export type LiveStatus = "off" | "connecting" | "live";

type Options = { onStatus?: (s: LiveStatus) => void; pollMs?: number; debounceMs?: number };

export function listenLive(_topics: string[], _onChange: () => void, { onStatus }: Options = {}) {
  onStatus?.("off");
  return () => {};
}

export function useLiveRefresh(_topics: string[] | null | undefined, _onChange: () => void, _options: Omit<Options, "onStatus"> = {}): LiveStatus {
  return "off";
}
