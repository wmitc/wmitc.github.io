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
    // Relative path (e.g. /games/foo/) or absolute URL.
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    // Lower numbers sort first.
    order: z.number().default(100),
  }),
});

export const collections = { projects };
