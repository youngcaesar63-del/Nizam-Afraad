"use client";

import { Bell, ChevronDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

const notifications = [
  {
    id: 1,
    text: "تمت إضافة فرد جديد: أحمد محمد",
    time: "منذ ٣٠ دقيقة",
    read: false,
    color: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    id: 2,
    text: "هناك ٥ وثائق تحتاج إلى تجديد",
    time: "منذ ساعتين",
    read: false,
    color: "bg-amber-50 dark:bg-amber-900/30",
  },
  {
    id: 3,
    text: "بيانات غير مكتملة لـ ٣ أفراد",
    time: "منذ ٥ ساعات",
    read: true,
    color: "bg-red-50 dark:bg-red-900/30",
  },
];

export default function AppHeader() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-none">
        <div className="flex items-center space-x-4">
          <Users className="w-8 h-8" />
          <h1 className="text-2xl font-bold">سجل الأفراد</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-primary/90 hover:text-white"
              >
                <Bell />
                <span className="absolute top-1 right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-6" align="end">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">الإشعارات</h4>
                  <p className="text-sm text-muted-foreground">
                    لديك {notifications.filter(n => !n.read).length} إشعارات غير مقروءة
                  </p>
                </div>
                <Separator />
                <div className="grid gap-2">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 ${notification.color}`}
                    >
                      {!notification.read && (
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      )}
                      <div className={`col-start-2 space-y-1 ${notification.read && 'col-start-1 col-span-2'}`}>
                        <p className="text-sm font-medium leading-none text-foreground">
                          {notification.text}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-white hover:bg-primary/90 hover:text-white">
                <span>المستخدم: مدير النظام</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
              <DropdownMenuItem>الإعدادات</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 focus:text-red-600">
                تسجيل الخروج
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
