import { fromFileUrl } from "https://deno.land/std@0.121.0/path/mod.ts";
import { Path } from "https://deno.land/x/yxz@0.12.0/path/path.ts";

console.dir(import.meta);
console.log(new URL(".", import.meta.url));

console.log(Path.cache("testlib").toString());

console.log(fromFileUrl(new URL(".", import.meta.url)));
