import { FC, useState } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
	const [value, setValue] = useState<string>('');

	return (
		<button
			className={`${styles.button} ${className}`}
			onChange={(e) => setValue(e.currentTarget.value)}
			value={value}
			{...props}
		/>
	);
};
