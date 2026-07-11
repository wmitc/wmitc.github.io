import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// Projects are edited as a single JSON data file: src/data/projects.json
const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    // Relative path (e.g. /games/foo/), absolute URL, or a PDF in public/.
    liveUrl: z.string().optional(),
    // Override the live-link button text (defaults to Play/Live).
    linkLabel: z.string().optional(),
    // Icon key for the card banner (see ProjectIcon.astro).
    icon: z.string().optional(),
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

// Race results, edited as a single JSON data file: src/data/races.json
const races = defineCollection({
  loader: file("src/data/races.json"),
  schema: z.object({
    race: z.string(),
    distance: z.string(),
    // Finish time, e.g. "21:05" or "3:24:15".
    time: z.string(),
    // ISO date "YYYY-MM-DD"; the page sorts most recent first.
    date: z.string(),
    location: z.string().optional(),
    notes: z.string().optional(),
    // Personal record — highlighted with a PR badge on the page.
    pr: z.boolean().default(false),
  }),
});

export const collections = { projects, books, races };
