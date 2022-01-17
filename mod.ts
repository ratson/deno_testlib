import { fromFileUrl } from "https://deno.land/std@0.121.0/path/mod.ts";
import dirname from "https://x.nest.land/denoname@0.8.2/mod.ts";

console.log(import.meta.url);
console.log(new URL(".", import.meta.url));

console.log(dirname(import.meta));

console.log(fromFileUrl(new URL(".", import.meta.url)));
