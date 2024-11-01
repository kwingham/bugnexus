import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "BugNexus | Sign Up",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SignUpPage() {
  return <SignUp />;
}
