// Last-modified date of a page, for the sitemap and the structured data: the date of the last
// commit that touched any of its source files, or today when one of them has uncommitted
// changes (a local build). Needs the full git history (fetch-depth: 0 in the deploy workflow).
import { execFileSync } from 'child_process';

const today = () => new Date().toISOString().slice(0, 10);

const git = (args: string[]) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

export const lastModified = (files: string[]): string => {
  try {
    if (git(['status', '--porcelain', '--', ...files])) return today();
    return git(['log', '-1', '--format=%cs', '--', ...files]) || today();
  } catch {
    return today();
  }
};
