import { FC } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
	return <button className={`${styles.button} ${className}`} {...props} />;
};
