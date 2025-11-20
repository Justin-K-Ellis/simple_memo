"use client";
import Link from "next/link";

interface UpdateBtnProps {
  id: number;
}

export default function UpdateBtn({ id }: UpdateBtnProps) {
  return (
    <Link href={`/update/${id}`}>
      <button>Update</button>
    </Link>
  );
}
