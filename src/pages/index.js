import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.css";

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[
        `developer`,
        `front-end`,
        `react`,
        `javascript`,
        `fellipe`,
        `pinheiro`
      ]}
    />

    <Layout>
      <section className="intro">
        <h1 className="intro__name">Hi, I'm Fellipe!</h1>
        <h2 className="intro__summary">
          Software Developer
          <a href="https://www.taller.net.br/" className="company-link">
            {" "}
            <span>@taller</span>
          </a>
        </h2>
      </section>

      <section className="social-icons">
        <a
          aria-label="Click to see all my open source project in Github"
          target="_blank"
          rel="noopener noreferrer"
          name="Github url"
          href="http://github.com/delete"
          className="social-icons__icon"
        >
          <svg
            className="svg-inline__fa"
            aria-hidden="true"
            data-prefix="fab"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="black"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
        </a>
        <a
          aria-label="Click to see all my open source project in Gitlab"
          target="_blank"
          rel="noopener noreferrer"
          name="Gitlab url"
          href="https://gitlab.com/delete21"
          className="social-icons__icon"
        >
          <svg className="svg-inline__fa svg-inline__fa--bigger"
            style={{ marginLeft: "-6px" }}
            aria-hidden="true"
            data-prefix="fab"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512">

            <g id="g44">
              <path id="path46" style={{fill: '#fc6d26'}} d="M461.17 301.83l-18.91-58.12-37.42-115.28a6.47 6.47 0 00-12.27 0l-37.42 115.21H230.82L193.4 128.43a6.46 6.46 0 00-12.26 0l-37.36 115.21-18.91 58.19a12.88 12.88 0 004.66 14.39L293 435l163.44-118.78a12.9 12.9 0 004.73-14.39"/>
            </g>
            <g id="g48">
              <path id="path50" style={{fill: '#e24329'}} d="M293 434.91l62.16-191.28H230.87L293 434.91z"/>
            </g>
            <g id="g56">
              <path id="path58" style={{fill: '#fc6d26'}} d="M293 434.91l-62.18-191.28h-87L293 434.91z"/>
            </g>
            <g id="g64">
              <path id="path66" style={{fill:'#fca326'}} d="M143.75 243.69l-18.91 58.12a12.88 12.88 0 004.66 14.39L293 435 143.75 243.69z"/>
            </g>
            <g id="g72">
              <path id="path74" style={{fill: '#e24329'}} d="M143.78 243.69h87.11l-37.49-115.2a6.47 6.47 0 00-12.27 0l-37.35 115.2z"/>
            </g>
            <g id="g76">
              <path id="path78" style={{fill: '#fc6d26'}} d="M293 434.91l62.16-191.28h87.14L293 434.91z"/>
            </g>
            <g id="g80">
              <path id="path82" style={{fill:'#fca326'}} d="M442.24 243.69l18.91 58.12a12.85 12.85 0 01-4.66 14.39L293 434.91l149.2-191.22z"/>
            </g>
            <g id="g84">
              <path id="path86" style={{fill: '#e24329'}} d="M442.28 243.69h-87.1l37.42-115.2a6.46 6.46 0 0112.26 0l37.42 115.2z"/>
            </g>
          </svg>
        </a>
        <a
          aria-label="Get in touch at Linkedin"
          target="_blank"
          rel="noopener noreferrer"
          name="Linkedin url"
          href="https://www.linkedin.com/in/pinheirofellipe"
          className="social-icons__icon"
        >
          <svg
            className="svg-inline__fa"
            aria-hidden="true"
            data-prefix="fab"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 382 382"
          >
            <path
              style={{ fill: "#0077B7" }}
              d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
            />
          </svg>
        </a>
      </section>
    </Layout>
  </>
);

export default IndexPage;
