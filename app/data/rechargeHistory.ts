export type RechargeStatus = "success" | "pending" | "failed";

export interface RechargeEntry {
  id: string;
  amount: string;
  operator: string;
  number: string;
  date: string; // ISO date string
  plan?: string;
  status: RechargeStatus;
}

export const RECHARGE_DATA: RechargeEntry[] = [
  {
    id: "r1",
    amount: "₹349",
    operator: "Jio Prepaid",
    number: "+91 98765 43210",
    date: new Date().toISOString(),
    plan: "Prepaid Plan",
    status: "success",
  },
  {
    id: "r2",
    amount: "₹599",
    operator: "Airtel Postpaid",
    number: "Mom",
    date: new Date().toISOString(),
    plan: "Postpaid Billing",
    status: "pending",
  },
  {
    id: "r3",
    amount: "₹299",
    operator: "Vi Prepaid",
    number: "+91 99887 76655",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    plan: "Topup",
    status: "failed",
  },
];

export function getStatusKeys() {
  const set = new Set<string>();
  RECHARGE_DATA.forEach((r) => set.add(r.status));
  return Array.from(set) as RechargeStatus[];
}

export default RECHARGE_DATA;
