import { Award, Briefcase, Calendar, Clipboard, Clock, Edit, FileText, Minus, TrendingUp, UserCheck, UserPlus, Users, ShieldQuestion, Plane, Activity, UserMinus, ShieldOff, Forward, Footprints } from "lucide-react";

export interface Personnel {
  id: number;
  nationalId: string;
  name: string;
  rank: string;
  unit: string;
  status: string;
  statusColor: string;
}


export const statsCards = [
    {
        title: "إجمالي الأفراد",
        value: "١٢٤٥",
        icon: Users,
        change: "+٥.٢٪",
        changeIcon: TrendingUp,
        changeColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-600 dark:text-indigo-300",
        description: "زيادة عن الشهر الماضي",
    },
    {
        title: "بالطابور",
        value: "٩٨٥",
        icon: Users,
        change: "٠.٠٪",
        changeIcon: Minus,
        changeColor: "text-gray-500 dark:text-gray-400",
        bgColor: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600 dark:text-green-300",
        description: "بدون تغيير عن الشهر الماضي",
    },
    {
        title: "عمليات",
        value: "٤٢",
        icon: ShieldQuestion,
        change: "+١.٢٪",
        changeIcon: TrendingUp,
        changeColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-600 dark:text-red-300",
        description: "زيادة عن الشهر الماضي",
    },
    {
        title: "إجازة",
        value: "١٢٠",
        icon: Briefcase,
        change: "-٣.٥٪",
        changeIcon: TrendingUp,
        changeColor: "text-red-600 dark:text-red-400",
        bgColor: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600 dark:text-blue-300",
        description: "نقصان عن الشهر الماضي",
    },
    {
        title: "إرسالية",
        value: "١٥",
        icon: Plane,
        change: "+١.٠٪",
        changeIcon: TrendingUp,
        changeColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-600 dark:text-cyan-300",
        description: "زيادة عن الشهر الماضي",
    },
    {
        title: "مرضية",
        value: "٨",
        icon: Activity,
        change: "-٠.٥٪",
        changeIcon: TrendingUp,
        changeColor: "text-red-600 dark:text-red-400",
        bgColor: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-600 dark:text-orange-300",
        description: "نقصان عن الشهر الماضي",
    },
    {
        title: "دورة تدريبية",
        value: "٢٥",
        icon: Award,
        change: "+٤.٠٪",
        changeIcon: TrendingUp,
        changeColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-600 dark:text-teal-300",
        description: "زيادة عن الشهر الماضي",
    },
    {
        title: "إنتداب",
        value: "٥",
        icon: UserCheck,
        change: "٠.٠٪",
        changeIcon: Minus,
        changeColor: "text-gray-500 dark:text-gray-400",
        bgColor: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600 dark:text-purple-300",
        description: "بدون تغيير عن الشهر الماضي",
    },
     {
        title: "إلحاق",
        value: "١٠",
        icon: UserPlus,
        change: "+٢.١٪",
        changeIcon: TrendingUp,
        changeColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-600 dark:text-pink-300",
        description: "زيادة عن الشهر الماضي",
    },
    {
        title: "نقل و لم يبلغ",
        value: "٣",
        icon: UserMinus,
        change: "-٠.٢٪",
        changeIcon: TrendingUp,
        changeColor: "text-red-600 dark:text-red-400",
        bgColor: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-600 dark:text-yellow-300",
        description: "نقصان عن الشهر الماضي",
    },
    {
        title: "غياب",
        value: "٢",
        icon: ShieldOff,
        change: "+٠.١٪",
        changeIcon: TrendingUp,
        changeColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-gray-100 dark:bg-gray-900",
        iconColor: "text-gray-600 dark:text-gray-300",
        description: "زيادة عن الشهر الماضي",
    },
    {
        title: "هروب",
        value: "١",
        icon: Footprints,
        change: "٠.٠٪",
        changeIcon: Minus,
        changeColor: "text-gray-500 dark:text-gray-400",
        bgColor: "bg-stone-100 dark:bg-stone-900",
        iconColor: "text-stone-600 dark:text-stone-300",
        description: "بدون تغيير عن الشهر الماضي",
    },
];

export const recentActivities = [
    {
        icon: UserPlus,
        bgColor: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600 dark:text-green-300",
        title: "تمت إضافة فرد جديد",
        description: "الرقم القومي: ٢٩٨٠٤١٥٠٢٠١٢٣٤ - الاسم: أحمد محمد علي",
        time: "منذ ٣٠ دقيقة",
    },
    {
        icon: Edit,
        bgColor: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600 dark:text-blue-300",
        title: "تم تعديل بيانات فرد",
        description: "الرقم القومي: ٢٩٨٠٤١٥٠٢٠١٢٣٤ - التعديل: تغيير الرتبة",
        time: "منذ ساعتين",
    },
    {
        icon: FileText,
        bgColor: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-600 dark:text-amber-300",
        title: "تم إنشاء تقرير",
        description: "تقرير الأفراد حسب الوحدات للربع الأول",
        time: "منذ ٥ ساعات",
    },
    {
        icon: Award,
        bgColor: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600 dark:text-purple-300",
        title: "ترقية فرد",
        description: "الرقم القومي: ٢٩٨٠٤١٥٠٢٠١٢٣٤ - الرتبة الجديدة: نقيب",
        time: "منذ ٨ ساعات",
    },
];

export const importantAlerts = [
    {
        icon: UserCheck,
        bgColor: "bg-red-50 dark:bg-red-900/30",
        iconBg: "bg-red-100 dark:bg-red-800",
        iconColor: "text-red-600 dark:text-red-300",
        title: "بيانات غير مكتملة",
        titleColor: "text-red-700 dark:text-red-300",
        description: "هناك ٥ أفراد ببيانات غير مكتملة تحتاج مراجعة",
        descriptionColor: "text-red-600 dark:text-red-400",
        count: 3,
        countBg: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
    },
    {
        icon: Clock,
        bgColor: "bg-amber-50 dark:bg-amber-900/30",
        iconBg: "bg-amber-100 dark:bg-amber-800",
        iconColor: "text-amber-600 dark:text-amber-300",
        title: "مواعيد تجديد",
        titleColor: "text-amber-700 dark:text-amber-300",
        description: "هناك ١٢ وثيقة تحتاج تجديد خلال الشهر القادم",
        descriptionColor: "text-amber-600 dark:text-amber-400",
    },
    {
        icon: UserCheck,
        bgColor: "bg-blue-50 dark:bg-blue-900/30",
        iconBg: "bg-blue-100 dark:bg-blue-800",
        iconColor: "text-blue-600 dark:text-blue-300",
        title: "مراجعة الأداء",
        titleColor: "text-blue-700 dark:text-blue-300",
        description: "حان وقت مراجعة أداء الأفراد للربع الحالي",
        descriptionColor: "text-blue-600 dark:text-blue-400",
    },
];

export const upcomingEvents = [
    {
        icon: Calendar,
        bgColor: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-600 dark:text-indigo-300",
        title: "اجتماع الإدارة",
        description: "اجتماع دوري لمناقشة سير العمل",
        time: "غدًا - ١٠:٠٠ صباحًا"
    },
    {
        icon: Award,
        bgColor: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600 dark:text-green-300",
        title: "حفل ترفيع",
        description: "حفل ترفيع عدد من الأفراد",
        time: "بعد غد - ١١:٠٠ صباحًا"
    },
    {
        icon: Clipboard,
        bgColor: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-600 dark:text-amber-300",
        title: "انتهاء التقييمات",
        description: "آخر موعد لتسليم تقييمات الأداء",
        time: "الأسبوع القادم"
    },
];

export const personnelData: Personnel[] = [
  { id: 1, nationalId: "29804150201234", name: "أحمد محمد علي", rank: "نقيب", unit: "الوحدة الأولى", status: "بالطابور", statusColor: "bg-green-100 text-green-800" },
  { id: 2, nationalId: "29905150201235", name: "محمد خالد سعيد", rank: "رائد", unit: "الوحدة الثانية", status: "إجازة", statusColor: "bg-blue-100 text-blue-800" },
  { id: 3, nationalId: "30006150201236", name: "علي حسن محمد", rank: "ملازم أول", unit: "الوحدة الثالثة", status: "دورة تدريبية", statusColor: "bg-amber-100 text-amber-800" },
  { id: 4, nationalId: "30107150201237", name: "محمود سعيد عبدالله", rank: "عقيد", unit: "الوحدة الرابعة", status: "عمليات", statusColor: "bg-red-100 text-red-800" },
  { id: 5, nationalId: "30208160201238", name: "يوسف إبراهيم حسن", rank: "عميد", unit: "الوحدة الأولى", status: "بالطابور", statusColor: "bg-green-100 text-green-800" },
  { id: 6, nationalId: "30309170201239", name: "خالد وليد مصطفى", rank: "لواء", unit: "قيادة الأركان", status: "إنتداب", statusColor: "bg-purple-100 text-purple-800" },
  { id: 7, nationalId: "30401180201240", name: "طارق زياد محمود", rank: "مقدم", unit: "الوحدة الثانية", status: "بالطابور", statusColor: "bg-green-100 text-green-800" },
  { id: 8, nationalId: "30502190201241", name: "عمر فاروق عبد العزيز", rank: "ملازم", unit: "الوحدة الثالثة", status: "إجازة", statusColor: "bg-blue-100 text-blue-800" }
];

export const ranks = ["ملازم", "ملازم أول", "نقيب", "رائد", "مقدم", "عقيد", "عميد", "لواء"];
export const statuses = ["بالطابور", "عمليات", "إجازة", "إرسالية", "مرضية", "دورة تدريبية", "إنتداب", "إلحاق", "نقل و لم يبلغ", "منقول", "غياب", "هروب"];
export const units = ["الوحدة الأولى", "الوحدة الثانية", "الوحدة الثالثة", "الوحدة الرابعة", "قيادة الأركان"];
