import "./Tech.css";
import { H2, BodyText } from "../../ui/Typography/Typography";

export const Tech = () => {
  return (
    <section className="tech-section">
      <div className="tech-content-section">
        <H2>Tech</H2>
        <BodyText>
          Figma,
          Webflow,
          Squarespace <br />
          React Hooks,
          Global State Management,
          Web Accessibility <br />
          APIs,
          Git & GitHub,<br />
          VS Code,
          Command Line (terminal) <br />
          Google cloud platform,
          Netlify,
          Render <br />
          Postman,
          MongoDB Compass <br />
          MongoDB Atlas,
          Chrome dev tools,
          Lint
        </BodyText>
      </div>
    </section>
  );
};