// Nova client — auth + database for this app. Auto-generated; do not edit.
const PROJECT_ID = "621c81fd-70d0-4db9-b591-754441cf7631";
const BASE = "https://ydxkspvyomihtseiblwu.supabase.co";
const APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkeGtzcHZ5b21paHRzZWlibHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MzYwNjAsImV4cCI6MjA5ODUxMjA2MH0.z9wktlx_dQMopgF8PIoxL2s9vL2IAMTou_kubK1dIKU";
const AUTH_URL = BASE + "/functions/v1/app-auth";
const DATA_URL = BASE + "/functions/v1/app-data";
const STORAGE_URL = BASE + "/functions/v1/app-storage";
const FUNCTIONS_URL = BASE + "/functions/v1/app-functions";
const TOKEN_KEY = "nova_token_" + PROJECT_ID;
const USER_KEY = "nova_user_" + PROJECT_ID;

async function authCall(action, email, password) {
  const res = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: APIKEY },
    body: JSON.stringify({ action, projectId: PROJECT_ID, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || ("Error " + res.status));
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  return data.user;
}

function getToken() { return localStorage.getItem(TOKEN_KEY); }

async function dataCall(op, table, payload) {
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: APIKEY, "x-nova-token": getToken() || "" },
    body: JSON.stringify(Object.assign({ op, table }, payload)),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || ("Error " + res.status));
  return data.data;
}

async function storageCall(payload) {
  const res = await fetch(STORAGE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: APIKEY, "x-nova-token": getToken() || "" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || ("Error " + res.status));
  return data;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const nova = {
  auth: {
    signup: (email, password) => authCall("signup", email, password),
    login: (email, password) => authCall("login", email, password),
    logout: () => { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); },
    user: () => { const u = localStorage.getItem(USER_KEY); return u ? JSON.parse(u) : null; },
  },
  db: {
    from: (table) => ({
      select: (filters) => dataCall("select", table, { filters }),
      insert: (values) => dataCall("insert", table, { values }),
      update: (id, values) => dataCall("update", table, { id, values }),
      remove: (id) => dataCall("delete", table, { id }),
    }),
  },
  storage: {
    upload: async (file) => {
      const data = await fileToBase64(file);
      return storageCall({ op: "upload", name: file.name, contentType: file.type || "application/octet-stream", data });
    },
    list: () => storageCall({ op: "list" }),
    remove: (name) => storageCall({ op: "delete", name }),
  },
  functions: {
    fetch: async (url, options) => {
      const opts = options || {};
      const res = await fetch(FUNCTIONS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: APIKEY, "x-nova-token": getToken() || "" },
        body: JSON.stringify({ op: "fetch", url, method: opts.method || "GET", headers: opts.headers || {}, body: opts.body || null }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || ("Error " + res.status));
      return data; // { status, ok, data }
    },
  },
};

export default nova;
