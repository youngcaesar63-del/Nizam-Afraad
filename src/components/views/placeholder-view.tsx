import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function PlaceholderView() {
  return (
    <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md text-center neumorphism">
            <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Construction className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="mt-4 text-2xl">
                    قيد الإنشاء
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    هذه الميزة قيد التطوير حاليًا. يرجى التحقق مرة أخرى لاحقًا!
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
