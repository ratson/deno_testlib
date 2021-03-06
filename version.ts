import meta from "./meta.ts";

function getVersion(s: string) {
  const m = s.match(/@((\d+\.)?(\d+\.)?(\d+))/);
  if (!m) return;
  return m[1];
}

export default getVersion(meta.url);
