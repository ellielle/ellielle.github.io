import { socialMedia } from ".";

const SocialMedia = () => {
  return (
    <ul className="justify-center items-center text-md">
      {socialMedia.map((platform) => (
        <li key={platform.key} className="mb-4 grid grid-cols-[1fr,10fr]">
          {platform}
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;