import { IButton } from '../interfaces/IButton';

export const buttonsForControl1: IButton[] = [
	{
		callback: (value, setValue) => setValue(''),
		id: 1,
		position: 'right',
		text: 'Clear',
	},
	{
		callback: (value, setValue) => setValue('Hello world!'),
		id: 2,
		position: 'right',
		text: 'Hi!',
	},
];
