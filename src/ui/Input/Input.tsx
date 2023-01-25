import { FC, useState } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input: FC<InputProps> = ({ className, ...props }) => {
	const [value, setValue] = useState<string>('');

	return (
		<input
			className={`${styles.input} ${className}`}
			onChange={(e) => setValue(e.currentTarget.value)}
			value={value}
			{...props}
		/>
	);
};
