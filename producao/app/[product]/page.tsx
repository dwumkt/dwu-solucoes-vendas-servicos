import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductPage } from "../site-components";
import { productBySlug, products, type ProductSlug } from "../site-data";

export function generateStaticParams() {
  return products.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product: slug } = await params;
  const product = productBySlug[slug as ProductSlug];
  if (!product) return {};
  return {
    title: product.shortName,
    description: product.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: slug } = await params;
  const product = productBySlug[slug as ProductSlug];
  if (!product) notFound();
  return <ProductPage product={product} />;
}
