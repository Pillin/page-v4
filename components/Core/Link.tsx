export default function Link(props: { link: string; label: string }) {
  return (
    <a
      className="btn btn-gradient text-xs md:text-xs"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.label}
    </a>
  );
}
