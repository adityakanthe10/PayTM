"use client";

import { useBalance } from "@repo/store/useBalance";

export default function useBalance() {
  const balance = useBalance();
  return <div>hi there {balance}</div>;
}
