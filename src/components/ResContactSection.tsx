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
    <section className="flex flex-col gap-10">
      {/* Contact Heading + Info */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-left">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-3 text-center lg:text-left">
            We are available for questions, feedback, or collaboration opportunities.
            Let us know how we can help!
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid gap-4 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
          {contact.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-muted rounded-lg p-4 flex flex-col justify-between gap-4"
              >
                <div>
                  <Icon className="h-6 w-auto mb-2" />
                  <p className="mb-1 text-md font-semibold">{item.label}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="font-semibold hover:underline">
                  {item.label === "Email" ? (
                    <a href={`mailto:${item.main}`}>{item.main}</a>
                  ) : item.label === "Phone" ? (
                    <a href={`tel:${item.main}`}>{item.main}</a>
                  ) : (
                    item.main
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <form action="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 rounded-lg border p-8">
          <div className="flex xl:flex-nowrap lg:flex-wrap gap-4">
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
    </section>
  );
};

export { ContactSection };