import { createApiClient } from "@plakam/api";

export const api = createApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
});
