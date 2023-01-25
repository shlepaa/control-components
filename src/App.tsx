import { FC, useState } from 'react';
import styles from './styles/App.module.css';
import { ControlButtons } from './components';
import { buttonsForControl1 } from './data/buttonsForControl1';
import { buttonsForControl2 } from './data/buttonsForControl2';

export const App: FC = () => {
	const [value, setValue] = useState<string>('');

	const handleSetValue = (string: string) => {
		setValue(string);
	};

	const [value1, setValue1] = useState<string>('');

	const handleSetValue1 = (string: string) => {
		setValue1(string);
	};

	return (
		<div className={styles.app}>
			<ControlButtons
				placeholder="2 кнопки справа"
				setValue={handleSetValue}
				value={value}
				buttons={buttonsForControl1}
			/>
			<ControlButtons
				placeholder="1 кнопка слева и справа"
				setValue={handleSetValue1}
				value={value1}
				buttons={buttonsForControl2}
			/>
		</div>
	);
};
