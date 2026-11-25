// src/ai/flows/semantic-personnel-search.ts
'use server';

/**
 * @fileOverview Implements semantic personnel search using natural language queries.
 *
 * - semanticPersonnelSearch - A function that handles the semantic search for personnel records.
 * - SemanticPersonnelSearchInput - The input type for the semanticPersonnelSearch function.
 * - SemanticPersonnelSearchOutput - The return type for the semanticPersonnelSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SemanticPersonnelSearchInputSchema = z.object({
  query: z
    .string()
    .describe('The natural language query to search for personnel records.'),
});
export type SemanticPersonnelSearchInput = z.infer<
  typeof SemanticPersonnelSearchInputSchema
>;

const SemanticPersonnelSearchOutputSchema = z.object({
  results: z.array(z.string()).describe('A list of matching personnel records.'),
});
export type SemanticPersonnelSearchOutput = z.infer<
  typeof SemanticPersonnelSearchOutputSchema
>;

export async function semanticPersonnelSearch(
  input: SemanticPersonnelSearchInput
): Promise<SemanticPersonnelSearchOutput> {
  return semanticPersonnelSearchFlow(input);
}

const semanticPersonnelSearchPrompt = ai.definePrompt({
  name: 'semanticPersonnelSearchPrompt',
  input: {schema: SemanticPersonnelSearchInputSchema},
  output: {schema: SemanticPersonnelSearchOutputSchema},
  prompt: `You are an expert at searching personnel records using natural language queries.
Given the following query, identify and return a list of matching personnel records.

Query: {{{query}}}

Return the results as a list of strings.`, // Adjusted prompt here
});

const semanticPersonnelSearchFlow = ai.defineFlow(
  {
    name: 'semanticPersonnelSearchFlow',
    inputSchema: SemanticPersonnelSearchInputSchema,
    outputSchema: SemanticPersonnelSearchOutputSchema,
  },
  async input => {
    const {output} = await semanticPersonnelSearchPrompt(input);
    return output!;
  }
);
