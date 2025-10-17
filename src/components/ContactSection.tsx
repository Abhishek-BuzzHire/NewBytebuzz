'use client'

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactdata } from "@/data/data";

const contact = contactdata;

const ContactSection = () => {
  const [formData, setFormData] = useState({ fullname: '', phone: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbze1tEO4v-8aXIQnLCW7PUX6t3Jyx8R5_G54b8POtquhevkSYeahpWWtosDbELUnnQn8g/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('Message sent successfully!');
      setFormData({ fullname: '', phone: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <section className="px-4 flex justify-center py-20">
      <div className="container relative">
        <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="size-[800px] rounded-full border border-neutral-800/60 dark:border-neutral-200/20 [mask-image:radial-gradient(white,transparent)]" />
          <div className="absolute inset-0 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:30px_30px] text-neutral-300 dark:text-neutral-700/40" />
        </div>


        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-2xl flex-col gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-5xl">
                Contact Us
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl mt-4 ">We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-muted rounded-lg p-4 flex flex-col justify-between gap-4">
                    <div>
                      <Icon className="h-6 w-auto mb-2" />
                      <p className="mb-2 text-md font-semibold">{item.label}</p>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                    </div>
                    <div className="max-w-4/5 font-semibold hover:underline">
                      {item.label === "Email" ? (
                        <a href={`mailto:${item.main}`}>{item.main}</a>
                      ) : item.label === "Phone" ? (
                        <a href={`tel:${item.main}`}>{item.main}</a>
                      ) : (
                        item.main
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <form action="post" onSubmit={handleSubmit}>
            <div className="mx-auto bg-background flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-4">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input type="text" id="fullname" placeholder="Full Name" value={formData.fullname} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} required />
                </div>
                <div className="grid w-full items-center gap-4">
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="number" id="phone" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>
              <div className="grid w-full items-center gap-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div className="grid w-full items-center gap-4">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              </div>
              <div className="grid w-full gap-4">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
              <p className="text-foreground text-md text-center">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
