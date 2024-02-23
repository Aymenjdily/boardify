import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Box } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box className="fixed bottom-0 w-full px-4 border-t shadow-sm bg-slate-100 py-4">
      <Box className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <Box className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant={"ghost"}>
            Privacy Policy
          </Button>
          <Button size="sm" asChild variant={"ghost"}>
            Terms of Service
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
