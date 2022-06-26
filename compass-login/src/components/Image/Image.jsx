export default function Image(props) {
  return (
    <div className={props.name}>
      <img className={props.wrapper} src={props.src} />
    </div>
  );
}
