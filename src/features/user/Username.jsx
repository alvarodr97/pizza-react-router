import { useSelector } from "react-redux";

export default function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <span className="hidden text-sm font-semibold md:block">{username}</span>
  );
}
