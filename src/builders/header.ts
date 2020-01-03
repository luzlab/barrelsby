export function addHeaderPrefix(content: string): string {
  return `/**
 * @file Automatically generated by barrelsby.
 * Run \`npm run barrels\` from the project root to regenerate
 */

import { JSONSchema } from 'json-schema-typed';

${content}`;
}
