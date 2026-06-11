type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "w-12 h-12 text-base",
  md: "w-16 h-16 sm:w-20 sm:h-20 text-xl sm:text-2xl",
  lg: "w-28 h-28 sm:w-32 sm:h-32 text-3xl sm:text-4xl",
};

export default function SarahAvatar({ size = "md" }: { size?: Size }) {
  return (
    <div
      role="img"
      aria-label="Sarah, the creator of FindMeAGLP1"
      className={`${sizeClasses[size]} shrink-0 rounded-full bg-gradient-to-br from-teal-300 via-teal-400 to-sky-500 flex items-center justify-center text-white font-semibold shadow-md ring-4 ring-white`}
    >
      <span>S</span>
    </div>
  );
}
