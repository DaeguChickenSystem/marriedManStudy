// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

interface Ilogin {
	email: string;
	password: string;
}
export function login(payload: Ilogin, callback: (res: any) => void) {
	fetch("http://localhost:8080/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((result) => {
			callback(result);
		})
		.catch((e) => {
			console.log(e);
		});
}

export function join(payload: Ilogin, callback: (res: any) => void) {
	fetch("http://localhost:8080/join", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((result) => {
			callback(result);
		})
		.catch((e) => {
			console.log(e);
		});
}
