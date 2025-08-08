import Link from "next/link";
import { Button } from "@/components/ui/button";

import Introduce from "@/components/introduce";

export default function Home() {
  return (
    <>
      <Introduce />

      <Button asChild>
        <Link href="/projects">show me projects you&apos;ve done</Link>
      </Button>
    </>
  );
}