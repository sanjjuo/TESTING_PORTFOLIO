import { WorkDetails } from "@/components/WorkDetails/WorkDetails";

const WorkDetailsPage = async ({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) => {
  const { slug } = await params; // ← unwrap the promise
  console.log("Slug:", slug);

  return <WorkDetails slug={slug} />;
};

export default WorkDetailsPage;
