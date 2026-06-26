import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

// Projects are edited as a single JSON data file: src/data/projects.json
const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    // Relative path (e.g. /games/foo/) or absolute URL.
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    // Lower numbers sort first.
    order: z.number().default(100),
  }),
});

// Reading list, edited as a single JSON data file: src/data/books.json
const books = defineCollection({
  loader: file("src/data/books.json"),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    // Rating out of 5, in half-star steps (e.g. 4.5).
    rating: z.number().min(0).max(5),
    yearRead: z.number().optional(),
    genre: z.string().optional(),
    notes: z.string().optional(),
    favorite: z.boolean().default(false),
  }),
});

// Blog posts: Markdown files in src/content/posts/
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, books, posts };
