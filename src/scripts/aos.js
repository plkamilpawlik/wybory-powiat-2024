import AOS from "aos";

export function initAOS() {
	AOS.init({ duration: 800, once: true, offset: 100 });
}
