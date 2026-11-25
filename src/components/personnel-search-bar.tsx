"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useMemo } from "react";
import { personnelData, type Personnel } from "@/lib/data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";

interface PersonnelSearchBarProps {
  onPersonnelSelect: (personnel: Personnel | null) => void;
}

export default function PersonnelSearchBar({ onPersonnelSelect }: PersonnelSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPersonnel = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    return personnelData.filter(
      (person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.nationalId.includes(searchQuery)
    );
  }, [searchQuery]);

  const handleSelect = (person: Personnel) => {
    setSearchQuery(`${person.name} (${person.nationalId})`);
    onPersonnelSelect(person);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (!value) {
        onPersonnelSelect(null);
    }
    setIsOpen(!!value && filteredPersonnel.length > 0);
  };

  return (
    <Card className="neumorphism">
      <CardContent className="p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-4"
        >
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverAnchor asChild>
              <div className="relative flex-grow">
                <PopoverTrigger asChild onClick={(e) => e.preventDefault()}>
                  <Input
                    type="text"
                    placeholder="ابحث بالرقم العسكري أو الاسم..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={() => {
                      if (searchQuery && filteredPersonnel.length > 0) setIsOpen(true);
                    }}
                    className="w-full pl-10 bg-card border-border"
                  />
                </PopoverTrigger>
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </PopoverAnchor>
            {filteredPersonnel.length > 0 && (
              <PopoverContent
                className="w-[--radix-popover-trigger-width] p-0"
                align="start"
              >
                <div className="flex flex-col space-y-1 p-2">
                  {filteredPersonnel.map((person) => (
                    <button
                      key={person.id}
                      onClick={() => handleSelect(person)}
                      className="text-right w-full p-2 rounded-md hover:bg-accent text-sm"
                    >
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {person.nationalId} - {person.rank}
                      </p>
                    </button>
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>
        </form>
      </CardContent>
    </Card>
  );
}
