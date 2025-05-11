import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Crise.io",
  description: "Crise.io",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="📨 Get in Touch"
        description="Have questions, feedback, or want to partner with us?
Crise.io is always in your corner — whether you're a fighter, coach, promoter, or fan. 
📍 Office: New Delhi, India
📞 Phone: +91-XXXXXXXXXX
✉️ Email: support@crise.io

Let us revolutionize fight performance together.
Fill out the form below and we will get back to you within 24 hours."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
