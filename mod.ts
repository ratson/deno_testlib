import { fromFileUrl } from "https://deno.land/std@0.121.0/path/mod.ts";

console.log(import.meta.url);
console.log(new URL(".", import.meta.url));
console.log(fromFileUrl(new URL(".", import.meta.url)));
