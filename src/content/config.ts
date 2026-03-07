import { defineCollection, z } from 'astro:content';

const baseWriting = z.object({
  title: z.string(),
  authorSlug: z.string(),
  authorName: z.string(),
  genre: z.enum(['poetry', 'prose', 'essay', 'story', 'ghazal', 'nazm', 'article']),
  language: z.string().default('Haryanvi'),
  summary: z.string(),
  publishDate: z.coerce.date(),
  featured: z.boolean().default(false),
  issueSlug: z.string().optional(),
  tags: z.array(z.string()).default([])
});

const daily = defineCollection({
  type: 'content',
  schema: baseWriting.extend({
    sectionLabel: z.string().default('Daily Contribution')
  })
});

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    month: z.string(),
    year: z.number(),
    issueDate: z.coerce.date(),
    coverImage: z.string().optional(),
    editorialNote: z.string(),
    featuredWritingSlugs: z.array(z.string()).default([])
  })
});

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    hometown: z.string().optional(),
    bio: z.string(),
    photo: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { daily, issues, authors };
