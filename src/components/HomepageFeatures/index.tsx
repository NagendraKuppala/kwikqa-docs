import react from "react";
import { HoverEffect } from "../ui/card-features";

const cards = [
  {
    title: "Cross Browser Testing",
    description:
      "Experience seamless testing across all major browsers with KWIKQA, supporting cutting-edge rendering engines including Chromium, WebKit, and Firefox.",
  },
  {
    title: "Mobile Web Testing",
    description:
      "Revolutionize your mobile web testing with KWIKQA's native emulation of Google Chrome for Android and Mobile Safari. Enjoy the same unparalleled rendering engine functionality across desktop and cloud environments.",
  },
  {
    title: "Cross Platform Testing",
    description:
      "Empower your testing process across Windows, Linux, and macOS platforms, whether locally or on continuous integration, effortlessly toggling between headless and headed modes.",
  },
  {
    title: "Unmatched Test Resilience",
    description:
      "With KWIKQA, kiss flaky tests goodbye. Its advanced auto-wait feature ensures actions are performed only when elements are fully actionable, coupled with a comprehensive set of introspection events, eradicating the need for unreliable timeouts, the bane of test stability.",
  },
  {
    title: "Test Isolation",
    description:
      "KWIKQA implements full isolation by creating a fresh browser context for each test, akin to a pristine browser profile. Enjoy seamless test isolation without sacrificing performance, as generating a new browser context takes mere milliseconds.",
  },
  {
    title: "Dynamic Web Assertiveness",
    description:
      "Embrace the dynamic web with confidence using KWIKQA's web-first assertions. Designed specifically for the intricacies of dynamic web elements, these assertions tirelessly retry until conditions are met, ensuring robust and reliable test results every time.",
  },
  {
    title: "Streamlined Authentication",
    description:
      "Say goodbye to repetitive login operations with KWIKQA's capability to retain authentication state across contexts. Save time and enhance efficiency by logging in once and effortlessly reusing authentication throughout all your tests, all while maintaining complete test independence.",
  },
  {
    title: "Flawless Execution Oversight",
    description:
      "Say farewell to test inconsistencies with KWIKQA's robust tracing capabilities. Tailor your test retry strategy, capture detailed execution traces, videos, and screenshots to nip flakes in the bud, ensuring flawless test execution from start to finish.",
  },
  {
    title: "Powerful Test Runner",
    description:
      "Harness the power of KWIKQA's powerful test runner to streamline your testing process. Run tests in parallel, seamlessly integrate with CI/CD pipelines, and export results to a variety of reporting tools.",
  },
];

export default function HomepageFeatures() {
  return (
    <>
      <div className=" py-8">
        <div className="px-8 text-start">
          <h2 className="sm:text-2xl md:text-3xl font-bold mb-3 text-green-700">
            KWIKQA – Key to effortless Test Automation.
          </h2>
          <p className="sm:text-lg md:text-xl font-semibold">
            KWIKQA isn't just another framework – it's the pinnacle of
            robustness and efficiency in the realm of test automation engineered
            specifically for modern web applications. With KWIKQA, automate your
            tests ASAP (As Simple As Possible), enabling faster testing cycles
            and ensuring the reliability of your applications.
          </p>
        </div>
      </div>

      <div className="px-8 text-center">
        <img
          className="mx-auto"
          src="img/Browsers.png"
          width="40%"
          alt="Browsers (Chromium, Edge, Firefox, WebKit)"
        />
      </div>
      <div className="px-8">
        <HoverEffect items={cards} />
      </div>
    </>
  );
}
