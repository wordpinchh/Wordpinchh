"use client";

import { useState } from "react";
import ContactLeftPanel from "@/components/contact/ContactLeftPanel";
import ContactRightPanel from "@/components/contact/ContactRightPanel";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#0B0B09] text-[#F0EDE6] mt-[40px]">
      <ContactLeftPanel />
      <ContactRightPanel />
    </div>
  );
}
