// aod-old has no backend. The modules in this folder keep the names and types the pages import
// (they used to be the server actions in src/server/actions/), but nothing here talks to a
// database, sends an email or calls a server. `backendEnabled` is always false, so the pages run
// on the preview's sample data and browser storage and never call the save functions; if one is
// called anyway, it answers with this.
export const offline = { ok: false as const, error: "This copy of the site has no backend, so nothing is saved." };
