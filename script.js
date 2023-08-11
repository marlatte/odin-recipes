const ingredients = document.querySelectorAll("ul li");

for (const line of ingredients) {
	const words = line.textContent.split(" ").slice(2).join(" ");
	const bolds = line.textContent.split(" ").slice(0, 2).join(" ");
	line.innerHTML = `<span class="quantity">${bolds}</span> ${words}`
}