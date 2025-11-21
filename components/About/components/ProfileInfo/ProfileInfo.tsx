export const ProfileInfo = () => {
  return (
    <ul className="flex items-center justify-between w-full">
      <li className="flex flex-col">
        <span className="text-xs text-muted-foreground font-bold">
          Location
        </span>
        <span>Dubai UAE</span>
      </li>
      <li className="flex flex-col">
        <span className="text-xs text-muted-foreground font-bold">Born</span>
        <span>October 22, 2001</span>
      </li>
      <li className="flex flex-col">
        <span className="text-xs text-muted-foreground font-bold">Focus</span>
        <span>Development, Design, Sports</span>
      </li>
    </ul>
  );
};
