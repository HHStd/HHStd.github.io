const supportEmail = 'hasan_alay@outlook.com';
const appStoreUrl = 'https://apps.apple.com/us/app/vaktio/id6774295131';
const playStoreUrl = {
  tr: 'https://play.google.com/store/apps/details?id=com.hasanalay.vaktioplus&hl=tr',
  en: 'https://play.google.com/store/apps/details?id=com.hasanalay.vaktioplus&hl=en',
};
const basePath = import.meta.env.BASE_URL || '/';
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
const withBase = (path) => `${normalizedBasePath}${path.replace(/^\/+/, '')}`;

const buildMailto = (subject, body) =>
  `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const site = {
  brand: 'HHStudio',
  title: 'Vaktio+',
  description: 'Vaktio+, namaz vakitlerini göstermenin ötesine geçen; ritim, istikrar ve kişisel ibadet takibi odaklı sade bir yardımcıdır.',
  version: '1.0.0',
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
  supportEmail,
  supportSubject: 'Vaktio+ Destek',
  supportBody: 'Merhaba,\n\nCihaz modeli:\nİşletim sistemi:\nUygulama sürümü: 1.0.0\nSorun / öneri:\n',
  supportMailto: {
    tr: buildMailto('Vaktio+ Destek', 'Merhaba,\n\nCihaz modeli:\nİşletim sistemi:\nUygulama sürümü: 1.0.0\nSorun / öneri:\n'),
    en: buildMailto('Vaktio+ Support', 'Hello,\n\nDevice model:\nOperating system:\nApp version: 1.0.0\nIssue / suggestion:\n'),
  },
  homePath: normalizedBasePath,
  vaktioPath: withBase('vaktio/'),
  privacyPath: withBase('vaktio/privacy/'),
  supportPath: withBase('vaktio/support/'),
  faviconPath: withBase('assets/apps/vaktio-plus/favicon.png'),
  touchIconPath: withBase('assets/apps/vaktio-plus/icon.png'),
  ogImage: withBase('assets/apps/vaktio-plus/panel.png'),
};

export const app = {
  id: 'vaktio-plus',
  name: 'Vaktio+',
  icon: withBase('assets/apps/vaktio-plus/icon.png'),
  screenshots: [
    {
      src: withBase('assets/apps/vaktio-plus/1.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/2.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/3.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/4.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/5.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/6.png'),
      width: 415,
      height: 900,
    },
  ],
};

export const copy = {
  tr: {
    common: {
      close: 'Kapat',
      language: 'Dil',
      downloadLabel: 'İndir',
    },
    home: {
      pageTitle: 'Vaktio+ · HHStudio',
      pageDescription: 'Vaktio+, namaz ritmini ve istikrarını görünür hale getiren sade bir ibadet eşlikçisidir.',
      hero: {
        eyebrow: 'Prayer Rhythm & Consistency',
        title: 'Namaz vakitlerini değil, namaz ritmini takip et.',
        description:
          'Vaktio+, namaz vakitlerini görmenin ötesine geçer. Kıldığın namazları işaretle, kaçırdıklarını takip et, haftalık düzenini gör ve günlük ibadet ritmini daha bilinçli hale getir.',
        secondary:
          'Vaktio+ vakitleri gösterir, ama asıl odağı namaz istikrarını görünür hale getirmektir.',
        iconAlt: 'Vaktio+ uygulama simgesi',
        ctas: [
          {
            label: 'App Store’dan İndir',
            href: appStoreUrl,
            variant: 'primary',
            badgeSrc: 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/tr-tr?releaseDate=1780099200',
          },
          {
            label: 'Google Play’den İndir',
            href: playStoreUrl.tr,
            variant: 'secondary',
            badgeSrc: withBase('assets/apps/vaktio-plus/badge-google-play-tr.png'),
          },
        ],
      },
      sections: {
        value: 'Konumlandırma',
        features: 'Öne çıkanlar',
        comparison: 'Neden Vaktio+?',
        screenshots: 'Uygulamadan ekranlar',
        privacy: 'Gizlilik ve odak',
        download: 'Vaktio+ ile ritmini görünür tut',
      },
      value: {
        title: 'Çoğu namaz uygulaması sana sadece bir sonraki vaktin ne zaman olduğunu söyler.',
        description:
          'Vaktio+ ise ibadet düzenini daha sakin, daha kişisel ve daha görünür hale getirmeye odaklanır.',
      },
      comparison: {
        title: 'Vaktio+ ise şunu görünür hale getirir:',
        items: [
          'Bugün ritmini koruyabildin mi?',
          'Hangi vakitlerde zorlanıyorsun?',
          'Kaçırdığın namazları düzenli takip edebiliyor musun?',
        ],
      },
      privacy: {
        title: 'Vaktio+, ibadet takibini kişisel ve odaklı tutmak için tasarlanmıştır.',
      },
      screenshots: [
        'Vaktio+ ekran görüntüsü 1',
        'Vaktio+ ekran görüntüsü 2',
        'Vaktio+ ekran görüntüsü 3',
        'Vaktio+ ekran görüntüsü 4',
        'Vaktio+ ekran görüntüsü 5',
        'Vaktio+ ekran görüntüsü 6',
      ],
      features: [
        {
          title: 'Namaz Ritmi Takibi',
          description: 'Her namazı işaretle, günlük düzenini tek bakışta gör.',
        },
        {
          title: 'Kaza Takibi',
          description: 'Kaçırdığın vakitleri takip et, biriken kaza durumunu daha düzenli yönet.',
        },
        {
          title: 'İçgörüler ve Trendler',
          description: 'En güçlü olduğun vakitleri, en çok zorlandığın alanları ve haftalık ritmini gör.',
        },
        {
          title: 'Namaz Vakitleri ve Kıble',
          description: 'Konumuna göre vakitleri takip et, ihtiyaç duyduğunda kıble yönünü hızlıca bul.',
        },
        {
          title: 'Günlük Manevi İçerik',
          description: 'Ayet, hadis ve Esmaül Hüsna içerikleriyle güne anlamlı bir temas ekle.',
        },
        {
          title: 'Widget’lar ve Bildirimler',
          description: 'Kilit ekranı widget’ları, yeniden boyutlandırılabilir widget’lar, Live Activities ve sakin bildirimlerle ritmini görünür tut.',
        },
      ],
      footer: {
        support: 'Destek',
        privacy: 'Gizlilik',
      },
      footerBrandAria: 'Vaktio+ ana sayfa',
      footerNavAria: 'Alt bilgi',
      lightboxDialog: 'Büyütülmüş ekran görüntüsü',
    },
    support: {
      pageTitle: 'Destek · Vaktio+',
      pageDescription: 'Vaktio+ için destek ve geri bildirim kanalları.',
      back: 'Ana sayfa',
      eyebrow: 'Destek',
      title: 'Destek',
      lede: 'Vaktio+ için sorun, öneri veya mağaza inceleme notlarını buradan gönderebilirsin. Resmî destek e-postası aşağıda.',
      emailCard: {
        title: 'E-posta desteği',
        subtitle: supportEmail,
        description: 'Vaktio+ sürüm 1.0.0 için doğrudan mesaj gönder.',
        href: site.supportMailto.tr,
      },
      checklistHeading: 'Gönderirken ekle',
      checklist: [
        'Cihaz modeli ve işletim sistemi sürümü',
        'Sorun oluşmadan önce yaptığın adımlar',
        'Mümkünse ekran görüntüsü veya kısa video',
        'İlgili ekran adı ya da derin bağlantı',
      ],
      noteHeading: 'Kısa not',
      note: 'Destek mesajlarına mümkün olduğunca aynı gün içinde dönmeye çalışırız. Gizlilik veya veri silme sorularında da aynı e-posta kullanılabilir.',
    },
    privacy: {
      pageTitle: 'Gizlilik Politikası · Vaktio+',
      pageDescription: 'Vaktio+ için gizlilik politikası.',
      back: 'Ana sayfa',
      eyebrow: 'Gizlilik Politikası',
      title: 'Gizlilik Politikası',
      lede: 'Vaktio+ hesap gerektirmez. Mümkün olduğunca veri cihazda kalır ve yalnızca uygulama özelliklerini çalıştırmak için kullanılır.',
      updated: 'Son güncelleme: 29 Mayıs 2026',
      sections: [
        {
          title: 'Cihazda tutulan veriler',
          items: [
            'Seçili ve kayıtlı konumlar',
            'Namaz tamamlama geçmişi ve kaza kayıtları',
            'Bildirim tercihleri, tema, dil ve diğer ayarlar',
            'Widget verileri ve uygulama grubu paylaşımı',
            'Yerel analiz etkinlikleri ve hata ayıklama metrikleri',
          ],
        },
        {
          title: 'İzinler ve kullanım',
          items: [
            'Konum: yakın vakitleri ve kıble yönünü hesaplamak için',
            'Bildirimler: namaz ve kaza hatırlatmaları için',
            'Fotoğraflar: paylaşım kartlarını kaydetmek için',
            'Android tam alarm: zamanlı hatırlatmalar için',
            'Reklam kimliği / izleme: reklam ve ölçüm özellikleri açık olduğunda',
          ],
        },
        {
          title: 'Üçüncü taraf hizmetler',
          items: [
            'Namaz vakti aramalarında şehir / ilçe sorgusu harici namaz vakti servisine gönderilebilir',
            'Google Mobile Ads, reklam gösterildiğinde cihaz ve etkileşim verilerini işleyebilir',
          ],
        },
        {
          title: 'Veri kontrolü',
          items: [
            'Uygulamayı silmek çoğu yerel veriyi cihazdan kaldırır',
            'İzinleri sistem ayarlarından kapatabilirsin',
            'Veri veya gizlilik soruları için destekle iletişime geçebilirsin',
          ],
        },
      ],
      contactHeading: 'İletişim',
      contactLabel: 'Destek:',
    },
  },
  en: {
    common: {
      close: 'Close',
      language: 'Language',
      downloadLabel: 'Download',
    },
    home: {
      pageTitle: 'Vaktio+ · HHStudio',
      pageDescription: 'Vaktio+ is a calm companion built around prayer rhythm, consistency, and personal worship tracking.',
      hero: {
        eyebrow: 'Prayer Rhythm & Consistency',
        title: 'Follow your prayer rhythm, not just prayer times.',
        description:
          'Vaktio+ goes beyond showing prayer times. Mark completed prayers, track missed ones, review your weekly rhythm, and build a more mindful daily worship routine.',
        secondary:
          'Vaktio+ shows prayer times, but its real focus is making prayer consistency visible.',
        iconAlt: 'Vaktio+ app icon',
        ctas: [
          {
            label: 'Download on the App Store',
            href: appStoreUrl,
            variant: 'primary',
            badgeSrc: 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1780099200',
          },
          {
            label: 'Get it on Google Play',
            href: playStoreUrl.en,
            variant: 'secondary',
            badgeSrc: withBase('assets/apps/vaktio-plus/badge-google-play-en.png'),
          },
        ],
      },
      sections: {
        value: 'Positioning',
        features: 'Core features',
        comparison: 'Why Vaktio+?',
        screenshots: 'App preview',
        privacy: 'Privacy and focus',
        download: 'Keep your rhythm visible with Vaktio+',
      },
      value: {
        title: 'Most prayer apps focus on prayer times. Vaktio+ focuses on prayer consistency.',
        description:
          'It is designed as a calm, modern companion for keeping worship rhythm visible without turning the experience into noise.',
      },
      comparison: {
        title: 'Instead of only showing the next prayer, Vaktio+ helps you ask:',
        items: [
          'Did you protect your rhythm today?',
          'Which prayers are hardest to stay consistent with?',
          'Are you tracking missed prayers with clarity?',
        ],
      },
      privacy: {
        title: 'Vaktio+ is designed to keep your worship tracking personal and focused.',
      },
      screenshots: [
        'Vaktio+ app screenshot 1',
        'Vaktio+ app screenshot 2',
        'Vaktio+ app screenshot 3',
        'Vaktio+ app screenshot 4',
        'Vaktio+ app screenshot 5',
        'Vaktio+ app screenshot 6',
      ],
      features: [
        {
          title: 'Prayer Rhythm Tracking',
          description: 'Track each prayer and see your daily consistency at a glance.',
        },
        {
          title: 'Missed Prayer Management',
          description: 'Review missed prayers, monitor your backlog, and manage past days with more clarity.',
        },
        {
          title: 'Insights & Trends',
          description: 'Discover your strongest prayers, identify where you struggle most, and follow your rhythm week by week.',
        },
        {
          title: 'Prayer Times & Qibla',
          description: 'Follow accurate prayer times based on your location and find the qibla direction whenever you need it.',
        },
        {
          title: 'Daily Reflection',
          description: 'Receive meaningful inspiration through selected verses, hadith, and Asma ul Husna.',
        },
        {
          title: 'Widgets & Notifications',
          description: 'Keep your rhythm visible with lock screen widgets, resizable widgets, Live Activities, and gentle reminders.',
        },
      ],
      footer: {
        support: 'Support',
        privacy: 'Privacy',
      },
      footerBrandAria: 'Vaktio+ home',
      footerNavAria: 'Footer',
      lightboxDialog: 'Expanded screenshot',
    },
    support: {
      pageTitle: 'Support · Vaktio+',
      pageDescription: 'Support and feedback channels for Vaktio+.',
      back: 'Home',
      eyebrow: 'Support',
      title: 'Support',
      lede: 'Send bug reports, suggestions, or store review notes here. The official support email is below.',
      emailCard: {
        title: 'Email support',
        subtitle: supportEmail,
        description: 'Send a direct message for Vaktio+ version 1.0.0.',
        href: site.supportMailto.en,
      },
      checklistHeading: 'Include when you write',
      checklist: [
        'Device model and operating system version',
        'Steps you took before the issue',
        'A screenshot or short video if possible',
        'The relevant screen name or deep link',
      ],
      noteHeading: 'Short note',
      note: 'We try to reply to support messages within the same day whenever possible. Use the same email for privacy or data deletion questions.',
    },
    privacy: {
      pageTitle: 'Privacy Policy · Vaktio+',
      pageDescription: 'Privacy policy for Vaktio+.',
      back: 'Home',
      eyebrow: 'Privacy Policy',
      title: 'Privacy Policy',
      lede: 'Vaktio+ does not require an account. Whenever possible, data stays on the device and is used only to power app features.',
      updated: 'Last updated: May 29, 2026',
      sections: [
        {
          title: 'Data kept on the device',
          items: [
            'Selected and saved locations',
            'Prayer completion history and missed-prayer records',
            'Notification preferences, theme, language, and other settings',
            'Widget data and app-group sharing',
            'Local analytics events and debugging metrics',
          ],
        },
        {
          title: 'Permissions and usage',
          items: [
            'Location: to calculate nearby prayer times and qibla direction',
            'Notifications: for prayer and missed-prayer reminders',
            'Photos: to save share cards',
            'Exact alarms on Android: for timed reminders',
            'Advertising ID / tracking: when ads and measurement features are enabled',
          ],
        },
        {
          title: 'Third-party services',
          items: [
            'Prayer time lookups may send city / district queries to an external prayer-time service',
            'Google Mobile Ads may process device and interaction data when ads are shown',
          ],
        },
        {
          title: 'Data control',
          items: [
            'Deleting the app usually removes most local data from the device',
            'You can disable permissions in system settings',
            'You can contact support with data or privacy questions',
          ],
        },
      ],
      contactHeading: 'Contact',
      contactLabel: 'Support:',
    },
  },
};
