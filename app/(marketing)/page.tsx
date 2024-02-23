import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <Flex align={"center"} justify={"center"} direction={"column"}>
      <Flex
        align={"center"}
        justify={"center"}
        direction={"column"}
        className={cn(headingFont.className)}
      >
        <Flex
          align={"center"}
          mb="4"
          p="4"
          className="border shadow-sm bg-amber-100 text-amber-700 rounded-full uppercase font-medium"
        >
          <Medal className="h-6 w-6 mr-2" />
          No 1 Task management
        </Flex>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Boardify helps team move
        </h1>
        <Box className="text-3xl md:text-6xl bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </Box>
      </Flex>
      <Box
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Boardify
      </Box>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Boardify for free</Link>
      </Button>
    </Flex>
  );
};

export default MarketingPage;
