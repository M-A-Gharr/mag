import { PROJECT_FILTERS, type ProjectFilter } from '@/content/projectCategories';
type ProjectNavigation = { filter: ProjectFilter; projectId?: number };
const key = 'portfolio-project-navigation';
export const readProjectNavigation = (): ProjectNavigation | null => {
  try {
    const value = JSON.parse(sessionStorage.getItem(key) ?? 'null');
    if (!value || !PROJECT_FILTERS.includes(value.filter)) return null;
    return { filter: value.filter, projectId: Number.isInteger(value.projectId) ? value.projectId : undefined };
  } catch { return null; }
};
export const saveProjectNavigation = (value: ProjectNavigation) => {
  try { sessionStorage.setItem(key, JSON.stringify(value)); } catch { /* Navigation also works without storage. */ }
};
