import Link from "next/link";

export default function MobileMenu({ open, close }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={close} className="mb-6">
        Close
      </button>

      <div className="space-y-4 text-lg">
        <Link href="#">Products</Link>
        <Link href="#">Platform</Link>
        <Link href="#">Security</Link>
        <Link href="#">Industries</Link>
        <Link href="#">Company</Link>
      </div>
    </div>
  );
}
