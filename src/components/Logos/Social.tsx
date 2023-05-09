import { socialMedia } from ".";

const SocialMedia = () => {
  return (
    <ul className="flex gap-12 cursor-pointer">
      {socialMedia.map((platform) => (
        <li key={platform.key}>{platform}</li>
      ))}
    </ul>
  );
};

export default SocialMedia;
