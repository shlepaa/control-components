import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Button, Input } from '../../ui';
import styles from './ControlButtons.module.css';
import { ControlButtonsProps } from './ControlButtons.props';

export const ControlButtons: FC<ControlButtonsProps> = observer(
	({ buttons, placeholder, controlInput, className, ...props }) => {
		return (
			<div className={`${styles.controlButtons} ${className}`} {...props}>
				{buttons.map((button) => (
					<Button
						className={`${styles.button} ${
							button.position === 'left'
								? styles.buttonLeft
								: styles.buttonRight
						}`}
						onClick={() =>
							button.callback
								? button.callback(controlInput.value)
								: button.valueText !== undefined &&
								  controlInput.setValue(button.valueText)
						}
						key={button.id}
					>
						{button.text}
					</Button>
				))}

				<Input
					className={styles.input}
					onChange={(e) =>
						controlInput.setValue(e.currentTarget.value)
					}
					value={controlInput.value}
					placeholder={placeholder}
				/>
			</div>
		);
	}
);
