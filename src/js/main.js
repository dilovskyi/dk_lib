import "./lib/lib";
import $ from "./lib/lib";

$("#trigger").click(() => {
	$("#trigger").createModal({
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
	});
});
