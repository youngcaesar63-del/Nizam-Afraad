"use client";

import { useState } from "react";
import { useFlow } from "@/lib/genkit-client";
import { semanticPersonnelSearch } from "@/ai/flows/semantic-personnel-search";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ranks, statuses } from "@/lib/data";
import { Loader2, Search } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function SemanticSearchCard() {
  const [query, setQuery] = useState("");
  const {data, loading, error, run} = useFlow(semanticPersonnelSearch);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    run({ query });
  };

  return (
    <Card className="neumorphism">
      <CardHeader>
        <CardTitle>البحث عن الأفراد</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              بحث دلالي (AI)
            </label>
            <div className="relative">
              <Input
                type="text"
                placeholder="مثال: 'ابحث عن جميع الضباط برتبة رائد في الوحدة الثانية'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 bg-card border-border"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
             <p className="text-xs text-muted-foreground mt-1">
              استخدم لغة طبيعية للبحث في سجلات الأفراد.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="w-full bg-card border-border">
                <SelectValue placeholder="جميع الرتب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الرتب</SelectItem>
                {ranks.map((rank) => (
                  <SelectItem key={rank} value={rank}>
                    {rank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full bg-card border-border">
                <SelectValue placeholder="جميع الحالات" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-start">
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Search className="mr-2 h-4 w-4" />
              )}
              <span>بحث</span>
            </Button>
          </div>
        </form>
         {(loading || (data && data.results.length > 0) || error) && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">نتائج البحث الدلالي:</h4>
            {loading && <p>جاري البحث...</p>}
            {error && (
              <Alert variant="destructive">
                <AlertTitle>خطأ في البحث</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}
            {data && data.results.length > 0 && (
              <ul className="list-disc pr-5 space-y-1">
                {data.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            )}
            {data && data.results.length === 0 && (
                <p>لم يتم العثور على نتائج.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
