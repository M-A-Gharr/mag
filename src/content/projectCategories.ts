/** Explicit categories: a project may answer several kinds of need. */
export const PROJECT_FILTERS = ['featured', 'all', 'websites', 'apps', 'ecommerce', 'ai'] as const;
export type ProjectFilter = typeof PROJECT_FILTERS[number];
export const FEATURED_PROJECTS = [11, 6, 12, 14, 8, 13];
export const PROJECT_CATEGORIES: Record<number, readonly ProjectFilter[]> = {
  1: ['apps', 'ai'], 2: ['apps'], 6: ['apps', 'ai'], 7: ['ai'],
  8: ['ecommerce'], 9: ['ecommerce'], 10: ['apps'], 11: ['ai'],
  12: ['websites', 'apps'], 13: ['ecommerce'], 14: ['websites'],
  15: ['ai'], 16: ['apps', 'ai'], 17: ['apps'], 18: ['apps'],
};
export const projectMatchesFilter = (id: number, filter: ProjectFilter) =>
  filter === 'all' || (filter === 'featured' ? FEATURED_PROJECTS.includes(id) : PROJECT_CATEGORIES[id]?.includes(filter) === true);
