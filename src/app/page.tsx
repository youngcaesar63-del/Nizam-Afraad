"use client";

import { useState, type ComponentType } from "react";
import AppHeader from "@/components/app-header";
import AppSidebar from "@/components/app-sidebar";
import DashboardView from "@/components/views/dashboard-view";
import PersonnelListView from "@/components/views/personnel-list-view";
import AddPersonnelView from "@/components/views/add-personnel-view";
import PlaceholderView from "@/components/views/placeholder-view";

const sections: Record<string, ComponentType> = {
  dashboard: DashboardView,
  "personnel-list": PersonnelListView,
  "add-personnel": AddPersonnelView,
  attachments: PlaceholderView,
  reports: PlaceholderView,
  statistics: PlaceholderView,
  print: PlaceholderView,
  users: PlaceholderView,
  permissions: PlaceholderView,
  backup: PlaceholderView,
  settings: PlaceholderView,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const ActiveComponent = sections[activeSection] || DashboardView;

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100 dark:bg-gray-900">
      <AppHeader />
      <div className="flex flex-1">
        <AppSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}
