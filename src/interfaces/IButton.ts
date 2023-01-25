export interface IButton {
	id: number;
	position: 'left' | 'right';
	text: string;
	callback?: (value: string) => void;
	valueText?: string;
}
