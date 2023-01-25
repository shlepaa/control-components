import { ICountryInfo } from '../interfaces/ICountryInfo';
import countries from './countries.json';

export function getCountryByName(countryName: string): Promise<ICountryInfo[]> {
	return new Promise((resolve) => {
		setTimeout(resolve, getRandom(100, 800));
	}).then(() => {
		if (typeof countryName !== 'string' || !countryName) {
			return [];
		}

		const searchText = countryName.toLocaleLowerCase();

		return countries.filter(
			(x) =>
				x.name.toLocaleLowerCase().startsWith(searchText) ||
				x.fullName.toLocaleLowerCase().startsWith(searchText)
		);
	});
}

function getRandom(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
