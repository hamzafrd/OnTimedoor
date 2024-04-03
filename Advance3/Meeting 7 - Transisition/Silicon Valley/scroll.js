window.addEventListener("scroll", reveal);

function reveal() {
	const reveals =
		document.querySelectorAll(".reveal");
	const windowHeight = window.innerHeight;
	const revealPoint = 40;
	console.log(
		"currentHeight : ",
		reveals[0].getBoundingClientRect().top
	);

	reveals.forEach((reveal) => {
		const revealTop =
			reveal.getBoundingClientRect().top;

		if (revealTop < windowHeight - revealPoint) {
			reveal.classList.add("active");

			setTimeout(() => {
				reveal.classList.add("borde-purple");
			}, 2000);
		} else {
			reveal.classList.remove("active");
			reveal.classList.remove("borde-purple");
		}
	});
}
