import { describe, expect, it } from 'vitest';
import { createApiClient } from './index';

describe('createApiClient', () => {
  it('erişim anahtarını ekler ve tipli yanıt döner', async () => {
    let seen: Request | undefined;
    const api = createApiClient({
      baseUrl: 'https://api.test',
      getAccessToken: () => 'abc',
      fetch: async (input) => {
        seen = input as Request;
        return Response.json({ last4: '4567' });
      },
    });

    const { data } = await api.GET('/api/v1/me/phone');

    expect(seen?.url).toBe('https://api.test/api/v1/me/phone');
    expect(seen?.headers.get('Authorization')).toBe('Bearer abc');
    expect(data?.last4).toBe('4567');
  });

  it('hata gövdesini `error` olarak verir', async () => {
    const api = createApiClient({
      baseUrl: 'https://api.test',
      fetch: async () => Response.json({ error: { code: 'LISTING_NOT_FOUND', message: 'İlan bulunamadı.' } }, { status: 404 }),
    });

    const { data, error } = await api.GET('/api/v1/plates/{id}', { params: { path: { id: 'x' } } });

    expect(data).toBeUndefined();
    expect(error?.error.code).toBe('LISTING_NOT_FOUND');
  });
});
