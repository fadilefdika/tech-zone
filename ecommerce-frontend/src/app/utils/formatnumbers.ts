// utils/formatNumber.ts

export function formatNumber(amount: number, isCurrency: boolean = false): string {
  if (isCurrency) {
    return amount.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  } else {
    return amount.toLocaleString('id-ID');
  }
}
