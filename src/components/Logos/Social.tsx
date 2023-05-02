import { socialMedia } from ".";

const SocialMedia = () => {
  return (
    <ul className="flex gap-12 justify-self-end items-center text-md cursor-pointer">
      {socialMedia.map((platform) => (
        <li key={platform.key}>{platform}</li>
      ))}
    </ul>
  );
};

export default SocialMedia;
