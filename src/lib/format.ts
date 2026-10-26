/** 1300 -> «1 300 ₸» */
export function tenge(n: number): string {
  return `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸`;
}

export const pad = (n: number): string => (n < 10 ? "0" : "") + n;
