const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return {
      data: {},
      content: normalized.trim(),
    };
  }

  const [, frontmatterText, content] = match;
  const data = {};

  frontmatterText.split("\n").forEach((line) => {
    const index = line.indexOf(":");
    if (index === -1) return;

    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  });

  return {
    data,
    content: content.trim(),
  };
}

function normalizePost(filePath, raw) {
  const { data, content } = parseFrontmatter(raw);
  const slug =
    data.slug || filePath.split("/").pop().replace(/\.md$/, "");

  return {
    slug,
    title: data.title || "",
    seoTitle: data.seoTitle || data.title || "",
    seoDescription: data.seoDescription || data.desc || "",
    desc: data.desc || "",
    image: data.image || "",
    publishedAt: data.publishedAt || "",
    author: data.author || "Linkon Tech",
    content,
  };
}

export function getAllPosts() {
  return Object.entries(modules)
    .map(([filePath, raw]) => normalizePost(filePath, raw))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}