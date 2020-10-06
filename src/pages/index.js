/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Hello | Toast</title>
        <meta name="description" content="Is a baby toast a crouton?" />
      </Helmet>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

            :root {
              --primary-color: #8257f5;
              --secondary-color: #f9a49d;
              --text-color: #201f27;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Roboto", sans-serif;
              font-size: 24px;
              color: var(--text-color);
            }

            h1 {
              font-size: 3rem;
            }
            a {
              text-decoration: none !important;
            }

            .page {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              overflow-x: hidden;
            }

            .page-content {
              flex: 1;
            }

            .hero {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 3rem 1.25rem 5rem 1.25rem;
              background-color: var(--primary-color);
              color: white;
            }

            .hero a {
              color: var(--secondary-color);
            }
            .hero a:hover {
              color: var(--secondary-color);
            }

            .socials {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
              padding: 0;
              list-style: none;
            }

            .socials a {
              color: white;
              padding: 0 1.25rem;
              font-weight: 600;
              font-size: 1.25rem;
            }

            .section {
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: 1200px;
              margin: 0 auto;
              padding: 3rem 1.25rem;
            }

            @media screen and (max-width: 560px) {
              .hero {
                align-items: flex-start;
              }

              .socials {
                justify-content: flex-start;
              }

              .socials a {
                padding: 0;
                padding-right: 0.75rem;
              }

              .section {
                align-items: flex-start;
                margin: 0;
              }
            }
          `,
        }}
      />
      <div className="page-content">
        <div className="hero">
          <h1>
            Hello, <a href="https://toast.dev/">Toast</a>.
          </h1>
          <ul className="socials">
            <li>
              <a href="https://discord.gg/m2RdVRA">Discord</a>
            </li>
            <li>
              <a href="https://github.com/toastdotdev/toast">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/toastdotdev">Twitter</a>
            </li>
          </ul>
        </div>
        <section className="section">
          <p>Baby's first Toast site. Pretty neat, huh?</p>
        </section>
      </div>
      <footer>
        <section className="section">Get Toasty</section>
      </footer>
    </div>
  );
};

export default Index;
