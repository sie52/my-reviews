import { Layout } from "@/components/ui/layout";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <p>Hello world</p>
    </Layout>
  );
}
