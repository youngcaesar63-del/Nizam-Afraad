"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import { personnelData, type Personnel } from "@/lib/data";
import { Card } from "../ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PersonnelSearchBar from "../personnel-search-bar";

export default function PersonnelListView() {
  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(null);

  const filteredPersonnel = useMemo(() => {
    if (selectedPersonnel) {
      return [selectedPersonnel];
    }
    return personnelData;
  }, [selectedPersonnel]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">كشف الأفراد</h2>
      <PersonnelSearchBar onPersonnelSelect={setSelectedPersonnel} />
      <Card className="neumorphism p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الرقم القومي</TableHead>
                <TableHead>الاسم</TableHead>
                <TableHead>الرتبة</TableHead>
                <TableHead>الوحدة</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPersonnel.map((person) => (
                <TableRow key={person.id}>
                  <TableCell className="font-medium">
                    {person.nationalId}
                  </TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.rank}</TableCell>
                  <TableCell>{person.unit}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={person.statusColor}>
                      {person.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-500"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  ١
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">٢</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">٣</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Card>
    </div>
  );
}