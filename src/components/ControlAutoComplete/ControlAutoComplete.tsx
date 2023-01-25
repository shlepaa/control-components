import { FC, useEffect, useState } from 'react';
import { getCountryByName } from '../../api/apiService';
import { ICountryInfo } from '../../interfaces/ICountryInfo';
import { Input } from '../../ui';
import styles from './ControlAutoComplete.module.css';
import { ControlAutoCompleteProps } from './ControlAutoComplete.props';

export const ControlAutoComplete: FC<ControlAutoCompleteProps> = ({
	placeholder,
	maxHint,
	value,
	setValue,
	className,
	...props
}) => {
	const [countries, setCountries] = useState<ICountryInfo[]>([]);

	useEffect(() => {
		getCountryByName(value).then((data) =>
			setCountries(data.slice(0, maxHint))
		);
	}, [maxHint, value]);

	return (
		<div
			className={`${styles.controlAutoComplete} ${className}`}
			{...props}
		>
			<Input
				onChange={(e) => setValue(e.currentTarget.value)}
				value={value}
				placeholder={placeholder}
			/>
			<div className={styles.countries}>
				{countries.map((country) => (
					<div
						onClick={() => setValue(country.name)}
						key={country.name}
						className={styles.country}
					>
						<span>{country.name}</span>
						<span>{country.fullName}</span>
						<img
							className={styles.img}
							src={country.flag}
							alt={country.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
