// Blog content loader.
//
// To add a post: create a new `.md` file in `src/content/blog/`.
// The filename (minus `.md`) becomes the URL slug, e.g.
// `my-post.md` -> /blog/my-post
//
// Each file starts with a frontmatter block between `---` lines:
//
//   ---
//   title: My Post Title
//   date: 2026-06-16
//   excerpt: A one-line summary shown in the blog list.
//   tags: [design, process]
//   coverImage: https://...
//   ---
//
//   Your post body in Markdown goes here.

export interface BlogPost {
  slug: string;
  title: string;
  date: string;        // ISO date string, e.g. "2026-06-16"
  excerpt: string;
  tags: string[];
  coverImage: string;
  content: string;     // raw Markdown body (without frontmatter)
}

// Pull in every .md file under src/content/blog as a raw string at build time.
const files = import.meta.glob("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Strip surrounding single/double quotes from a frontmatter value.
function unquote(value: string): string {
  return value.replace(/^['"]|['"]$/g, "").trim();
}

// Minimal, browser-safe frontmatter parser. Supports the fields we use:
// strings, and an inline array for `tags` like [a, b, c].
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const [, frontmatter, body] = match;
  const data: Record<string, unknown> = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const sep = line.indexOf(":");
    if (sep === -1) continue;

    const key = line.slice(0, sep).trim();
    const rawValue = line.slice(sep + 1).trim();

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((item) => unquote(item))
        .filter(Boolean);
    } else {
      data[key] = unquote(rawValue);
    }
  }

  return { data, body: body.trim() };
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: (data.title as string) ?? "Untitled",
      date: (data.date as string) ?? "",
      excerpt: (data.excerpt as string) ?? "",
      tags: (data.tags as string[]) ?? [],
      coverImage: (data.coverImage as string) ?? "",
      content: body,
    };
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

// Format an ISO date string for display, e.g. "June 16, 2026".
export function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
