import Image from "next/image";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "w-12 h-12",
  md: "w-16 h-16 sm:w-20 sm:h-20",
  lg: "w-28 h-28 sm:w-32 sm:h-32",
};

export default function SarahAvatar({ size = "md" }: { size?: Size }) {
  return (
    <div
      className={`${sizeClasses[size]} relative shrink-0 rounded-full overflow-hidden shadow-md ring-4 ring-white`}
    >
      <Image
        src="/herophoto.jpg"
        alt="Sarah, the creator of FindMeAGLP1"
        fill
        sizes="128px"
        className="object-cover"
        priority={size === "lg"}
      />
    </div>
  );
}
