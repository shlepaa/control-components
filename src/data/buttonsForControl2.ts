import { IButton } from '../interfaces/IButton';

export const buttonsForControl2: IButton[] = [
	{
		callback: (value) => alert(value),
		id: 1,
		position: 'right',
		text: 'Alert value',
	},
	{
		callback: (value) => {
			if (Number(value)) {
				alert(value);
			}
		},
		id: 2,
		position: 'left',
		text: 'Is it number?',
	},
];
