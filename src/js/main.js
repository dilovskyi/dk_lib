import "./lib/lib";
import $ from "./lib/lib";

$("#triggerModal").on("click", () =>
	$("#triggerModal").createModal({
		text: {
			title: "Start and end in Cusco!",
			body: `With the Hiking & Trekking tour Salkantay Trek to Machu Picchu - 8 Days, you have
      a 8 days tour package taking you through Cusco, Peru and 8 other destinations in Peru. Salkantay Trek to
      Machu Picchu - 8 Days includes accommodation in a hotel as well as an expert guide, meals, transport and
      more.
          `,
		},
		btns: {
			count: 2,
			settings: [
				["Close", ["btns-danger", "mr-10"], true],
				["Save changes", ["btn-success"], false, () => alert("Данные созранены")],
			],
		},
	})
);

$(".thanksModal").on("click", () =>
	$(".thanksModal").createModal({
		text: {
			title: "Start and end in Cairo! ",
			body: `With the In-depth Cultural tour Nile Adventure - Felucca cruise, you have a 9 days tour package taking you through Cairo, Egypt and 5 other destinations in Egypt. Nile Adventure - Felucca cruise includes accommodation in a hotel as well as an expert guide, meals, transport and more.`,
		},
		btns: {
			count: 1,
			settings: [["Not awaible at this moment", ["btn-dark"], true]],
		},
	})
);

$()
	.get("https://reqres.in/api/users/2")
	.then((res) => {
		console.log(res);
	});

$().timer(".timer", new Date("2021-5-20"));

const lol = $(".timer").siblings();
console.log(lol);
