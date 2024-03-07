import { AuthErrorEventBus } from "@/context/AuthContext";

type Options = {
  method: string;
  body?: string;
  headers?: HeadersInit | undefined;
};

export default class HttpClient {
  baseURL: string;
  authErrorEventBus: AuthErrorEventBus;

  constructor(baseURL: string, authErrorEventBus: AuthErrorEventBus) {
    this.baseURL = baseURL;
    this.authErrorEventBus = authErrorEventBus;
  }

  async fetch(url: string, options: Options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }

    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : "Something went wrong! 🤪";

      const error = new Error(message);

      if (res.status === 401) {
        this.authErrorEventBus.notify(error);
        return;
      }
      throw error;
    }
    return data;
  }
}
