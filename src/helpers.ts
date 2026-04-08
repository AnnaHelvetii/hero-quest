import type { QuestItem, FooterLink } from "./types";

import share from "./img/accent-icons/share.svg";
import googlePlay from "./img/accent-icons/google-play.svg";
import telegram from "./img/accent-icons/telegram.svg";

import ios from "./img/links-icons/app-store.svg";
import android from "./img/links-icons/google-play.svg";
import androidTv from "./img/links-icons/androidtv.svg";
import windows from "./img/links-icons/macos.svg";
import macos from "./img/links-icons/macos.svg";
import linux from "./img/links-icons/linux.svg";

import sbp from "./img/links-payments/sbp.svg";
import sberpay from "./img/links-payments/sberpay.svg";
import tinkoff from "./img/links-payments/tpay.svg";
import bankCard from "./img/links-payments/credit-card-outline.svg";
import crypt from "./img/links-payments/tether.svg";

export const QUESTS_DATA: QuestItem[] = [
	{ id: 1, status: "Доступен", title: "оставь отзыв", text: "Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!", buttonText: "Оставить отзыв" },
	{ id: 2, status: "Доступен", title: "Поделиться с Друзьями", text: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!", buttonText: "поделиться", icon: share },
	{ id: 3, status: "Доступен", title: "Поддержите нас лайками", text: "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!", buttonText: "поддержать", icon: googlePlay },
	{ id: 4, status: "Доступен", title: "Оцени нас в Google Картах", text: "Поделись впечатлением и получи 1 день VPN в подарок!", buttonText: "оценить" },
	{ id: 5, status: "Доступен", title: "Оцени нас в ЯНДЕКС Картах", text: "Поделись впечатлением и получи 1 день VPN в подарок!", buttonText: "оценить" },
	{ id: 6, status: "Доступен", title: "Подписаться на TG-канал", text: "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!", buttonText: "подписаться", icon: telegram },
];

export const INFO_LINKS: string[] = ["FAQ", "Тарифы", "Блог", "Роутеры", "Партнёрам", "Аккаунт"];

export const DOWNLOAD_LINKS: FooterLink[] = [
	{ label: "IOS", icon: ios },
	{ label: "Android", icon: android },
	{ label: "Android TV", icon: androidTv },
	{ label: "Windows", icon: windows },
	{ label: "Mac Os", icon: macos },
	{ label: "Linux", icon: linux },
];

export const PAYMENT_METHODS: FooterLink[] = [
	{ label: "СБП", icon: sbp },
	{ label: "Sberpay", icon: sberpay },
	{ label: "Tinkoff Pay", icon: tinkoff },
	{ label: "Банковская карта", icon: bankCard },
	{ label: "Криптовалюта", icon: crypt },
];