# Plakam Nerde? istemcileri

pnpm workspaces + Turborepo. Backend ayrı depoda: `plakam-nerde-api`.

| Klasör | Ne |
|---|---|
| `apps/mobile` | Expo (Expo Router) — iOS/Android |
| `apps/web` | Next.js — kullanıcı sitesi (paylaşılan ilan önizlemesi, aranabilir arama sayfası) |
| `apps/admin` | Vite + React — yönetim paneli, `admin.` alt alan adında |
| `packages/api` | Tipli API istemcisi (`openapi-fetch`); tipler backend'in `openapi.json`'ından üretilir |
| `packages/validation` | Plaka ve telefon kuralları (zod); backend'deki `normalizePlate`/`normalizePhone` ile birebir aynı, hata mesajları da |

```bash
pnpm install
pnpm typecheck && pnpm test && pnpm build
pnpm --filter @plakam/web dev      # veya @plakam/admin, @plakam/mobile (expo start)
```

API adresi: `apps/*/.env.example` dosyasını `.env.local` (mobilde `.env`) olarak kopyala.

## API tipleri

Backend'de bir uç değişince orada `pnpm build && pnpm openapi` ile `openapi.json` yenilenir. Sonra burada:

```bash
pnpm api:generate                                   # ../plakam-nerde-api/openapi.json'dan okur
OPENAPI_SOURCE=<yol-veya-adres> pnpm api:generate   # başka bir kaynaktan
```

Üretilen `packages/api/src/schema.d.ts` commit'lenir; istek ve yanıt tipleri elle yazılmaz:

```ts
const { data, error } = await api.GET('/api/v1/plates/search', { params: { query: { q: '34 ABC 123' } } });
// data: SearchResult, error: { error: { code, message, details } }
```
