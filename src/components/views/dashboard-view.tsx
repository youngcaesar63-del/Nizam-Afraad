"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Database,
  FileText,
  Settings,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RanksChart from "@/components/ranks-chart";
import {
  statsCards,
  recentActivities,
  importantAlerts,
  upcomingEvents,
} from "@/lib/data";
import PersonnelSearchBar from "../personnel-search-bar";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function DashboardView() {
  const [dateState, setDateState] = useState({ hijri: "", gregorian: "" });
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ar-EG", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      );
    }, 1000);

    const today = new Date();
    const gregorianDate = new Intl.DateTimeFormat("ar-EG-u-nu-latn", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(today);

    const hijriDate = new Intl.DateTimeFormat(
      "ar-SA-u-ca-islamic-umalqura",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
        numberingSystem: "arab",
      }
    ).format(today);

    setDateState({
      hijri: hijriDate,
      gregorian: gregorianDate,
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-3xl font-bold text-foreground">لوحة التحكم</h2>
        <div className="flex items-center flex-wrap gap-4 text-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground" />
            <div className="text-right">
              <span className="font-medium text-sm">{dateState.gregorian}</span>
              <p className="text-xs text-muted-foreground">{dateState.hijri}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-muted-foreground" />
            <span className="font-medium text-sm">{time}</span>
          </div>
        </div>
      </div>

      <PersonnelSearchBar onPersonnelSelect={() => {}} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {statsCards.map((card) => (
          <div className="neumorphism" key={card.title}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`h-6 w-6 ${card.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="neumorphism">
            <CardHeader>
              <CardTitle>التنبيهات المهمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {importantAlerts.map((alert, index) => (
                <Alert
                  key={index}
                  className={`flex items-center p-4 rounded-lg ${alert.bgColor}`}
                >
                  <div className={`p-2 rounded-full mr-4 ${alert.iconBg}`}>
                    <alert.icon className={`h-5 w-5 ${alert.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <AlertTitle className={`${alert.titleColor}`}>
                      {alert.title}
                    </AlertTitle>
                    <AlertDescription
                      className={`${alert.descriptionColor}`}
                    >
                      {alert.description}
                    </AlertDescription>
                  </div>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <Card className="neumorphism">
            <CardHeader>
              <CardTitle>إجراءات سريعة</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-4">
              {[
                { icon: UserPlus, label: "إضافة فرد" },
                { icon: FileText, label: "تقرير شهري" },
                { icon: Database, label: "نسخ احتياطي" },
                { icon: Settings, label: "الإعدادات" },
              ].map((action, index) => (
                <a
                  href="#"
                  key={index}
                  className="neumorphism p-4 flex flex-col items-center justify-center text-center hover:bg-accent -m-1"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <action.icon className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-medium text-xs text-center">
                    {action.label}
                  </span>
                </a>
              ))}
            </CardContent>
          </Card>
          <Card className="neumorphism">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>النشاط الأخير</CardTitle>
              <Button variant="link" className="text-primary -mr-4">
                عرض الكل
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[350px] overflow-y-auto scrollbar-hide">
                {recentActivities.map((activity, index) => (
                  <div className="flex items-start" key={index}>
                    <div className={`p-2 rounded-full ml-4 ${activity.bgColor}`}>
                      <activity.icon
                        className={`h-5 w-5 ${activity.iconColor}`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <Card className="h-full neumorphism">
            <CardHeader>
              <CardTitle>توزيع الأفراد حسب الرتب</CardTitle>
            </CardHeader>
            <CardContent>
              <RanksChart />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2 space-y-6">
          {upcomingEvents.map((event, index) => (
            <Card className="shadow-md" key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div
                  className={`p-2 rounded-full ${event.bgColor}`}
                >
                  <event.icon className={`w-5 h-5 ${event.iconColor}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">{event.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {event.time}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
