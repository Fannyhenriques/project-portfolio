import "./Bio.css";
import { H2, BodyText } from "../../ui/Typography/Typography";

export const Bio = () => {
  return (
    <section className="bio-section">
      <div className="content-section">
        <H2>Bio</H2>
        <BodyText>
          Fanny is a social, solution-oriented, and creative junior web developer with a background in mental health. Her previous experience as a social worker has shaped her structured approach, strong communication skills, and ability to collaborate effectively. With a passion for building user-friendly applications and solving problems creatively, she brings both technical skills and human-centered thinking to every project.
        </BodyText>
      </div>
    </section>
  );
};