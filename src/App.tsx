import { FC } from 'react';
import styles from './styles/App.module.css';
import { ControlAutoComplete, ControlButtons } from './components';
import { buttonsForControl1 } from './data/buttonsForControl1';
import { buttonsForControl2 } from './data/buttonsForControl2';
import { observer } from 'mobx-react-lite';
import { ControlInput } from './store/ControlInput';

export const App: FC = observer(() => {
	return (
		<div className={styles.app}>
			<ControlButtons
				placeholder="2 buttons right"
				controlInput={new ControlInput()}
				buttons={buttonsForControl1}
			/>
			<ControlButtons
				placeholder="1 button right and left"
				controlInput={new ControlInput()}
				buttons={buttonsForControl2}
			/>
			<div className={styles.block}>
				<ControlAutoComplete
					maxHint={3}
					controlInput={new ControlInput()}
					placeholder="max 3"
				/>
				<ControlAutoComplete
					maxHint={10}
					controlInput={new ControlInput()}
					placeholder="max 10"
				/>
			</div>
		</div>
	);
});
