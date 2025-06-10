import clsx from "clsx";

function SocialIcon({ href, src, alt, hoverColor, download = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      className={clsx(
        "p-2 rounded-xl transition duration-300",
        hoverColor
      )}
    >
      <img src={src} alt={alt} className="w-10 h-10" />
    </a>
  );
}

export default SocialIcon;