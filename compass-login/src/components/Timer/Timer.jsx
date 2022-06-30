
import { TimerSeconds } from "./Timer.styled";
export function Timer(props) {
  return <TimerSeconds>{props.tempo()}</TimerSeconds>;
}

export default Timer;
