const corsi = [
	"1998.min.json",
	"2004.min.json",
	"2005.min.json",
	"2008.min.json",
	"2013.min.json",
	"2016.min.json",
	"2018.min.json",
	"2020.min.json",
	"2022.min.json",
	"2023.min.json",
	"2024.min.json",
].map((el) => `/data/corsi/${el}`);

const eventi_codemotion = [
	"codemotion_gmail1_1.min.json",
	"codemotion_gmail1_2.min.json",
	"codemotion_gmail1_3.min.json",
].map((el) => `/data/eventi/codemotion/${el}`);

const eventi_eventbrite = [
	"eventbrite_gmail1.json",
	"eventbrite_gmail2.json",
].map((el) => `/data/eventi/eventbrite/${el}`);

const eventi_google = ["giuseppe.pizzimenti.seed@gmail.com.min.json"].map(
	(el) => `/data/eventi/google/${el}`,
);

const eventi = [
	"/data/eventi/esclusioni.min.js",
	"data/eventi/partecipante.min.json",
	"data/eventi/relatore.min.json",
	...eventi_codemotion,
	...eventi_eventbrite,
	...eventi_google,
];

const images_covers = ["images/covers/1.webp"];

export const scripts = [];
export const styles = [];
export const fonts = ["/styles/fonts/cv/fonts.min.js"];
export const images = [...images_covers];
export const data = [...corsi, ...eventi];
export const includes = [];
