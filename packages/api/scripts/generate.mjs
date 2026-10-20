import { writeFileSync } from 'node:fs';
import openapiTS, { astToString } from 'openapi-typescript';

// Kaynak: backend deposundaki openapi.json (varsayılan, depolar yan yana klonlanmışsa) ya da
// OPENAPI_SOURCE ile verilen dosya yolu / adres.
const source = process.env.OPENAPI_SOURCE ?? new URL('../../../../plakam-nerde-api/openapi.json', import.meta.url);
const ast = await openapiTS(typeof source === 'string' && /^https?:/.test(source) ? new URL(source) : source);
const header = '// Bu dosya üretilir, elle değiştirme: pnpm api:generate\n\n';
writeFileSync(new URL('../src/schema.d.ts', import.meta.url), header + astToString(ast));
console.log(`src/schema.d.ts üretildi (${source})`);
