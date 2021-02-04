import * as React from "react";

// TODO: Write content for this section
// Also build an accordion
export default function AboutSection() {
  return (
    <section id="faq">
      <h1 id="about">About Carbon Clock</h1>
      <p>
        Carbon Clock is an estimation of how much CO<sub>2</sub> can be released
        into the atmosphere to limit global warming to a maximum of 1.5°C.
      </p>
      <h3 id="calculation">How is it calculated?</h3>
      <p>
        The values are calculated using interpolation of calculations from the{" "}
        <a
          href="https://www.ipcc.ch/sr15/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPCC
        </a>
        . The full calculation can be viewed{" "}
        <a
          href="https://github.com/hugotiger/carbon-clock/blob/master/src/calc.ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . It's written in TypeScript, but shouldn't be too hard to grasp even
        with no prior programming knowlede.
        {/* TODO: Länk till min github för uträkning */}
      </p>
      {/* <h3>Is it trustworthy?</h3>
      <h3>Who is behind the website?</h3>
      <h3>What can we do to reduce emissions?</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        excepturi ad dolorum sunt. Ratione perspiciatis rerum rem sint ipsum,
        iusto provident, natus animi nostrum praesentium nisi incidunt voluptas
        obcaecati qui.
      </p> */}
    </section>
  );
}
