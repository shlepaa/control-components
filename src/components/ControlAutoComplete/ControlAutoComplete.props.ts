import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ControlInput } from '../../store/ControlInput';

export interface ControlAutoCompleteProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	placeholder: string;
	maxHint: number;
	controlInput: ControlInput;
}
