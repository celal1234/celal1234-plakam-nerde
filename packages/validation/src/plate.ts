import { z } from 'zod';

// Backend'deki src/common/plate/plate.ts ile birebir aynı kalmalı; testler aynı örnekleri kullanır.
// T2 önerisi: esnek kontrol; uymayan plaka engellenmez, yalnızca `formatOk=false` döner.
const PLATE_RE = /^(0[1-9]|[1-7][0-9]|8[01])[A-Z]{1,3}[0-9]{2,4}$/;

export interface NormalizedPlate {
  normalized: string;
  formatOk: boolean;
}

export function normalizePlate(input: string): NormalizedPlate {
  const normalized = input
    .replace(/[\s\-_.]/g, '')
    // Türkçe klavyede "i" → "İ" olur; plakalarda yalnızca Latin I vardır.
    .replace(/[iıİ]/g, 'I')
    .toUpperCase();
  return { normalized, formatOk: PLATE_RE.test(normalized) };
}

// Formata uymayan plaka hata değil; form `normalizePlate(v).formatOk` ile ayrıca uyarı gösterir.
export const plateSchema = z
  .string()
  .trim()
  .max(20, 'Plaka en fazla 20 karakter olabilir.')
  .refine((v) => normalizePlate(v).normalized.length > 0, 'Plaka numarası girin.');
