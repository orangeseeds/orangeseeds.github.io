import { parse } from 'path';

type GlobEntry = {
    metadata: Post;
    default: unknown;
}

export interface Post {
    title: string;
    description: string;
    date: string;
}

export const posts = Object.entries(
    import.meta.glob<GlobEntry>('../../../lib/posts/**/*.md', { eager: true }))
    .map(
        ([filepath, globEntry]) => {
            return {
                // get the data from each of the .md files
                ...globEntry.metadata,
                meta: parse(filepath)
            };
        }
    )
    // sort them by date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // get references to previous and next post
    .map((post, index, allPosts) => ({
        ...post,
        next: allPosts[index - 1] || 0,
        previous: allPosts[index + 1] || 0,
    }))
