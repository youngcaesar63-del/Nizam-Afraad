"use client";

import {
  Activity,
  BarChart2,
  Database,
  File,
  FileText,
  Folder,
  Home,
  List,
  Printer,
  Settings,
  Shield,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dispatch, SetStateAction } from "react";

interface AppSidebarProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const navGroups = [
  {
    title: "الرئيسية",
    icon: Home,
    items: [
      {
        id: "dashboard",
        label: "لوحة التحكم",
        icon: Activity,
      },
    ],
  },
  {
    title: "إدارة الأفراد",
    icon: Users,
    items: [
      {
        id: "personnel-list",
        label: "كشف الأفراد",
        icon: List,
      },
      {
        id: "add-personnel",
        label: "إضافة فرد جديد",
        icon: UserPlus,
      },
      {
        id: "attachments",
        label: "المرفقات",
        icon: Folder,
      },
    ],
  },
  {
    title: "التقارير",
    icon: FileText,
    items: [
      {
        id: "reports",
        label: "تقارير الأفراد",
        icon: File,
      },
      {
        id: "statistics",
        label: "إحصاءات",
        icon: BarChart2,
      },
      {
        id: "print",
        label: "الطباعة",
        icon: Printer,
      },
    ],
  },
  {
    title: "الإدارة",
    icon: Settings,
    items: [
      {
        id: "users",
        label: "المستخدمون",
        icon: UserCheck,
      },
      {
        id: "permissions",
        label: "الصلاحيات",
        icon: Shield,
      },
      {
        id: "backup",
        label: "النسخ الاحتياطي",
        icon: Database,
      },
      {
        id: "settings",
        label: "الإعدادات",
        icon: Settings,
      },
    ],
  },
];

export default function AppSidebar({
  activeSection,
  setActiveSection,
}: AppSidebarProps) {
  return (
    <aside className="hidden md:block w-64 bg-card text-card-foreground p-4 sticky top-[84px] h-[calc(100vh-84px)] transition-all duration-300 shadow-md">
      <nav className="space-y-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold mb-3 flex items-center text-foreground">
              <group.icon className="ml-2 h-5 w-5" />
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(item.id);
                    }}
                    className={cn(
                      "flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon className="ml-3 h-4 w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
