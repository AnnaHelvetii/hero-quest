export interface QuestItem {
	id: number;
	status: string;
	title: string;
	text: string;
	buttonText: string;
	icon?: string;
}

export interface FooterLink {
	label: string;
	icon?: string;
}