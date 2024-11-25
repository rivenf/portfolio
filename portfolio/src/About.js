import SocialIcons from "./SocialIcons.js";

export default function About() {
  return (
    <div className="container">
      <header>
        <h1>Nico Rivera</h1>
      </header>
      <div className="aboutGrid">
        <div>
          <h2>About Me</h2>
          <p>
            Hello, I'm Nico! I am a front-end developer with a background in
            art, photography, and design. I have spent the last several years
            working in technology education, and I am looking to get back to my
            design and development roots.
          </p>
          <p>
            I am based in Maryland, and in my spare time I enjoy getting outside
            and spending time in nature. When the weather refuses to cooperate,
            I like to spend time indoors crafting, reading, or learning new
            programming skills.
          </p>
          <SocialIcons />
        </div>
        <img src="images/Nico.jpg" alt="Nico Rivera" className="aboutImg" />
      </div>
    </div>
  );
}
