import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Landing Page">
      <Image
        src="/images/logo.svg"
        alt="Axion Hosting Store"
        width={100}
        height={100}
        layout="fixed"
        quality={100}
      />
    </Link>
  );
}
