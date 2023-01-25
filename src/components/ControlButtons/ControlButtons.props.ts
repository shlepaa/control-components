import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IButton } from '../../interfaces/IButton';
import { TypeSetValue } from '../../interfaces/TypeSetValue';

export interface ControlButtonsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	buttons: IButton[];
	value: string;
	setValue: TypeSetValue;
	placeholder: string;
}
