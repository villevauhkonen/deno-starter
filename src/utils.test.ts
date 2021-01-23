import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.84.0/testing/asserts.ts";
import { parseBearerToken } from "./utils.ts";

// parseBearerToken
Deno.test("parseBearerToken should parse correctly", () => {
  const token = parseBearerToken("Bearer xyz");
  assertEquals(token, "xyz");
});

Deno.test("parseBearerToken throw error with invalid data", () => {
  assertThrows(() => parseBearerToken("Bearerxyz"));
});

Deno.test("parseBearerToken throw error with invalid data", () => {
  assertThrows(() => parseBearerToken("Bearer"));
});
