"use client";

import { useState, useCallback } from "react";

// Custom implementation of useFlow to bypass module resolution issues.
export function useFlow<I, O>(flow: (input: I) => Promise<O>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<O | undefined>(undefined);

  const run = useCallback(
    async (input: I) => {
      setLoading(true);
      setError(null);
      setData(undefined);
      try {
        const result = await flow(input);
        setData(result);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [flow]
  );

  return { loading, error, data, run };
}