import arSA from 'date-fns/locale/ar-SA';

const DateTimeFormats = {
  sunday: 'ح',
  monday: 'ن',
  tuesday: 'ث',
  wednesday: 'ر',
  thursday: 'خ',
  friday: 'ج',
  saturday: 'س',
  ok: 'حسناً',
  today: 'اليوم',
  yesterday: 'أمس',
  now: 'الآن',
  hours: 'ساعات',
  minutes: 'دقائق',
  seconds: 'ثواني',
  formattedMonthPattern: 'MMM, yyyy',
  formattedDayPattern: 'MMM dd, yyyy',
  shortDateFormat: 'MM/dd/yyyy',
  shortTimeFormat: 'HH:mm aa',
  dateLocale: arSA as any
};

export default {
  code: 'ar-SA',
  common: {
    loading: 'جاري التحميل...',
    emptyMessage: 'لا يوجد المزيد من البيانات',
    remove: 'حذف',
    clear: 'يزيل'
  },
  Plaintext: {
    unfilled: 'شاغرة',
    notSelected: 'لم يتم اختياره',
    notUploaded: 'لم يتم الرفع'
  },
  Pagination: {
    more: 'المزيد',
    prev: 'السابق',
    next: 'التالي',
    first: 'الأول',
    last: 'الأخير',

    limit: 'صفحة / {0}',
    total: 'الإجمالي: {0}',
    skip: 'اذهب إل {0}'
  },
  Calendar: { ...DateTimeFormats },
  DatePicker: { ...DateTimeFormats },
  DateRangePicker: {
    ...DateTimeFormats,
    last7Days: 'أخر 7 أيام'
  },
  Picker: {
    noResultsText: 'لا يوجد نتائج',
    placeholder: 'إختيار',
    searchPlaceholder: 'البحث',
    checkAll: 'الجميع'
  },
  InputPicker: {
    newItem: 'عنصر جديد',
    createOption: 'إنشاء العنصر "{0}"'
  },
  Uploader: {
    inited: 'تم البدء',
    progress: 'جاري الرفع',
    error: 'خطأ',
    complete: 'تم الإنتهاء',
    emptyFile: 'فارغ',
    upload: 'رفع',
    removeFile: 'حذف الملف'
  },
  CloseButton: {
    closeLabel: 'اغلق'
  },
  Breadcrumb: {
    expandText: 'عرض المسار'
  },
  Toggle: {
    on: 'إيقاف',
    off: 'تشغيل'
  }
};
