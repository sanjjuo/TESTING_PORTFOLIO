export const AboutWork = ({
  subdesc,
  description,
}: {
  subdesc: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <h4 className="uppercase">{subdesc}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
};
