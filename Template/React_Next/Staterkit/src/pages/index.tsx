import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
};

export default Index;
