import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("router", router);
    const redirectToAlertPage = async () => {
      await router.push("/elements/bc_alert");
    };

    redirectToAlertPage();
  }, [router]);

  return <></>;
};

export default Index;
