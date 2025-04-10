import Image from "next/image";
import { LoginPage } from "./(page)/login/page";
import HomePage from "./(page)/homee/page";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <LoginPage/>
      {/* <HomePage/> */}
      {/* <div>
        <Button variant="outline">Click me</Button>
      </div> */}

    </>
  );
}
