import "./lib/lib";
import $ from "./lib/lib";

$("#triggerModal").on("click", () =>
	$("#triggerModal").createModal({
		text: {
			title: "Modal title",
			body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias ut velit expedita molestiae iste
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
			title: "Thanks for looking here",
			body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias ut velit expedita molestiae iste
          `,
		},
		btns: {
			count: 1,
			settings: [["You are welcome", ["btn-dark"], true]],
		},
	})
);

$()
	.get("https://reqres.in/api/users/2")
	.then((res) => {
		console.log(res);
	});
