import "./Tech.css";
import { H2, BodyText } from "../../ui/Typography/Typography";

export const Tech = () => {
  return (
    <section className="tech-section">
      <div className="tech-content-section">
        <H2>Tech</H2>
        <BodyText>
          React Hooks,
          Global State Management,
          Web Accessibility,<br />
          APIs,
          Git & GitHub,
          Command Line (terminal) <br />
          VS Code,
          Chrome dev tools,
          Netlify,
          Render,<br />
          Google cloud platform,
          Postman,<br />
          MongoDB Compass,
          MongoDB Atlas,
          Lint,
        </BodyText>
      </div>
    </section>
  );
};