import AOS from "aos";

export function initAOS() {
	AOS.init({ duration: 1000, once: true, offset: 100 });
}
