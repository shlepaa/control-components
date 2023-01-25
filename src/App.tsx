import { FC } from 'react';
import { Button, Input } from './ui';
import styles from './styles/App.module.css';

export const App: FC = () => {
	return (
		<div className={styles.app}>
			<Input />
			<Button>123</Button>
		</div>
	);
};
