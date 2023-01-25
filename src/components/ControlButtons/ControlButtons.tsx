import { FC } from 'react';
import { Button, Input } from '../../ui';
import styles from './ControlButtons.module.css';
import { ControlButtonsProps } from './ControlButtons.props';

export const ControlButtons: FC<ControlButtonsProps> = ({
	buttons,
	placeholder,
	value,
	setValue,
	className,
	...props
}) => {
	return (
		<div className={`${styles.controlButtons} ${className}`} {...props}>
			{buttons.map((button) => (
				<Button
					className={`${styles.button} ${
						button.position === 'left'
							? styles.buttonLeft
							: styles.buttonRight
					}`}
					onClick={() => button.callback(value, setValue)}
					key={button.id}
				>
					{button.text}
				</Button>
			))}
			<Input
				className={styles.input}
				onChange={(e) => setValue(e.currentTarget.value)}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};
