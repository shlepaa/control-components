import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IButton } from '../../interfaces/IButton';
import { ControlInput } from '../../store/ControlInput';

export interface ControlButtonsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	buttons: IButton[];
	placeholder: string;
	controlInput: ControlInput;
}
