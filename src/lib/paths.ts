/** Prefix public asset paths with the Next.js `basePath` (needed for GitHub Pages subpath deploys). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
