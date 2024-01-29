export function Intro({ name }) {
  return (
    <div className="flex items-center gap-3 text-primary text-sm md:text-base">
      <span className="w-7 md:w-10 h-[1px] bg-primary"></span>
      {name}
    </div>
  );
}
