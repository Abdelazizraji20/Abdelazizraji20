interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  'fr': {
    'nav.home': 'Accueil',
    'nav.languages': 'Langues',
    'nav.robotics': 'Robotique',
    'nav.gallery': 'Galerie',
    'nav.availability': 'Disponibilité',
    'nav.registration': 'Inscription',
    'nav.contact': 'Contact',
    'header.title': 'La Véga Center Fès',
    'home.services': 'Nos Services',
    'footer.contact': 'Contact',
    'footer.hours': 'Horaires',
    'footer.address': 'Adresse'
  },
  'ar': {
    'nav.home': 'الرئيسية',
    'nav.languages': 'اللغات',
    'nav.robotics': 'الروبوتات',
    'nav.gallery': 'معرض الصور',
    'nav.availability': 'جدول المواعيد',
    'nav.registration': 'التسجيل',
    'nav.contact': 'اتصل بنا',
    'header.title': 'مركز لا فيغا فاس',
    'home.services': 'خدماتنا',
    'footer.contact': 'معلومات الاتصال',
    'footer.hours': 'ساعات العمل',
    'footer.address': 'العنوان'
  }
};