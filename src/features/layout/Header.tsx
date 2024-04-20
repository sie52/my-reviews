import { Layout } from "@/components/ui/layout";
import { SignInButton } from "./SignInButton";
import { LoggedInButton } from "./auth/LoggedInButton";
import Image from "next/image";
import { ModeToggle } from "../theme/ModeToggle";
export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-2">
      <Layout className="flex items-center gap-4">
        <div className="flex-1">
          <Image
            src="/icon.png"
            width={32}
            height={32}
            alt="icon page reviews"
          />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};
