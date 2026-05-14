import { createI18n } from "vue-i18n";

const messages = {
  uk: {
    title: "Мій магазин помад",
    currency: "грн",
    topSales: "Топ продажів!",
    products: {
      matteRed: "Матова червона",
      nudePink: "Нюдовий рожевий",
      glossyShine: "Глянцевий блиск",
    },
  },
  en: {
    title: "My Lipstick Store",
    currency: "UAH",
    topSales: "Top Sales!",
    products: {
      matteRed: "Matte Red",
      nudePink: "Nude Pink",
      glossyShine: "Glossy Shine",
    },
  },
};

export const i18n = createI18n({
  legacy: false, 
  locale: "uk", 
  fallbackLocale: "en",
  messages,
});


