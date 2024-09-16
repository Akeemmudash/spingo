export function formatToUSD(number) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(number);
}

export const formatTextToSlug = (category) =>
  category.toLowerCase().trim().replace(/\s+/g, "-");
