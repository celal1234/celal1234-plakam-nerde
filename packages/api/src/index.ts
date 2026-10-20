import createFetchClient from 'openapi-fetch';
import type { components, paths } from './schema';

export type { components, paths };
export type Schemas = components['schemas'];
// Sunucunun her hata yanıtındaki gövde: `{ error: { code, message, details } }` (T6 §4).
export type ApiError = Schemas['ApiErrorResponse']['error'];

export interface ApiClientOptions {
  // Örn. https://api.<alan-adı>; yollar `/api/v1/...` olarak şemada yer alır.
  baseUrl: string;
  // Her istekte çağrılır; token yoksa istek oturumsuz gider. Yenileme (refresh) uygulamaya özgüdür:
  // mobil secure-store'dan, web httpOnly cookie'den yapar.
  getAccessToken?: () => string | null | undefined | Promise<string | null | undefined>;
  fetch?: typeof globalThis.fetch;
  credentials?: RequestCredentials;
}

export function createApiClient({ getAccessToken, ...options }: ApiClientOptions) {
  const client = createFetchClient<paths>(options);
  if (getAccessToken) {
    client.use({
      async onRequest({ request }) {
        const token = await getAccessToken();
        if (token) request.headers.set('Authorization', `Bearer ${token}`);
        return request;
      },
    });
  }
  return client;
}

export type ApiClient = ReturnType<typeof createApiClient>;
