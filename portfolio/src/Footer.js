import SocialIcons from "./SocialIcons.js";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <SocialIcons />
      <p>Copyright © {year} Nico Rivera</p>
    </div>
  );
}
