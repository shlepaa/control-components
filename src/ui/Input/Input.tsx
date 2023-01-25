import { FC } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input: FC<InputProps> = ({ className, ...props }) => {
	return <input className={`${styles.input} ${className}`} {...props} />;
};
