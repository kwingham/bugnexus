import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "BugNexus | Sign In",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SignInPage() {
  return <SignIn />;
}
