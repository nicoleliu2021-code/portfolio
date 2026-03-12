import { notFound } from "next/navigation";
import { teardowns } from "@/data/teardowns";
import TeardownDetail from "@/components/product-teardowns/TeardownDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return teardowns.map((teardown) => ({
    id: teardown.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const teardown = teardowns.find((t) => t.id === id);

  if (!teardown) {
    return {
      title: "Teardown Not Found",
    };
  }

  return {
    title: `${teardown.title} | Product Teardowns`,
    description: teardown.overview.substring(0, 160),
  };
}

export default async function TeardownPage({ params }: PageProps) {
  const { id } = await params;
  const teardown = teardowns.find((t) => t.id === id);

  if (!teardown) {
    notFound();
  }

  return <TeardownDetail teardown={teardown} />;
}
