import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Box } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <Box className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <Box className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant={"outline"} asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Boardify for free</Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
