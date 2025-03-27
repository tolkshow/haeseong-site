import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <Link href="/" className="text-2xl font-bold">해성인력</Link>
        <nav className="space-x-4 text-sm sm:text-base">
          <Link href="/about" className="hover:underline">회사소개</Link>
          <Link href="/job" className="hover:underline">구직안내</Link>
          <Link href="/client" className="hover:underline">거래처안내</Link>
          <Link href="/contact" className="hover:underline">문의하기</Link>
        </nav>
      </div>
    </header>
  );
}