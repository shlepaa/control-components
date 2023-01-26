import { makeAutoObservable, runInAction } from 'mobx';
import { getCountryByName } from '../api/apiService';
import { ICountryInfo } from '../interfaces/ICountryInfo';

type TypeState = 'pending' | 'error' | 'done';

export class ControlInput {
	value: string = '';
	countries: ICountryInfo[] = [];
	state: TypeState = 'done';

	constructor() {
		makeAutoObservable(this);
	}

	setValue(string: string) {
		this.value = string;
	}

	async fetchCountries(value: string, maxHint: number) {
		this.countries = [];
		this.state = 'pending';

		try {
			const fetchCountries = await getCountryByName(value);
			runInAction(() => {
				this.countries = fetchCountries.slice(0, maxHint);
				this.state = 'done';
			});
		} catch {
			runInAction(() => {
				this.state = 'error';
			});
		}
	}
}
