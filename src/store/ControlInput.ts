import { makeAutoObservable } from 'mobx';

export class ControlInput {
	value: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setValue(string: string) {
		this.value = string;
	}
}
