import type { QuestItem } from "./types";
import share from "./img/accent-icons/share.svg";
import googlePlay from "./img/accent-icons/google-play.svg";
import telegram from "./img/accent-icons/telegram.svg";

export const QUESTS_DATA: QuestItem[] = [
	{ id: 1, status: "Доступен", title: "оставь отзыв", text: "Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!", buttonText: "Оставить отзыв" },
	{ id: 2, status: "Доступен", title: "Поделиться с Друзьями", text: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!", buttonText: "поделиться", icon: share },
	{ id: 3, status: "Доступен", title: "Поддержите нас лайками", text: "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!", buttonText: "поддержать", icon: googlePlay },
	{ id: 4, status: "Доступен", title: "Оцени нас в Google Картах", text: "Поделись впечатлением и получи 1 день VPN в подарок!", buttonText: "оценить" },
	{ id: 5, status: "Доступен", title: "Оцени нас в ЯНДЕКС Картах", text: "Поделись впечатлением и получи 1 день VPN в подарок!", buttonText: "оценить" },
	{ id: 6, status: "Доступен", title: "Подписаться на TG-канал", text: "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!", buttonText: "подписаться", icon: telegram },
];