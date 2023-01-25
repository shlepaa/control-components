import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TypeSetValue } from '../../interfaces/TypeSetValue';

export interface ControlAutoCompleteProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: string;
	setValue: TypeSetValue;
	placeholder: string;
	maxHint: number;
}
