import { TypeSetValue } from './TypeSetValue';

export interface IButton {
	id: number;
	position: 'left' | 'right';
	text: string;
	callback: (value: string, setValue: TypeSetValue) => void;
}
