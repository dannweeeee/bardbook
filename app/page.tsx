import FacebookPostForm from "@/components/forms/FacebookPostForm";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="circles min-h-screen min-w-full flex flex-col">
      <div className="ml-auto px-10 py-8">
        <UserButton />
      </div>
      <FacebookPostForm />
    </div>
  );
}
