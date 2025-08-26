"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { getApiUrl, API_CONFIG } from "@/lib/config";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement)
        .value,
      message: (
        e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
    };

    try {
      const apiUrl = getApiUrl(API_CONFIG.ENDPOINTS.CONTACT);
      console.log('Sending request to:', apiUrl);
      console.log('Form data:', formData);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.text();
        console.error('Error response:', errorData);
        throw new Error(`Failed to send message: ${response.status}`);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif text-primary">
          Get in Touch
        </CardTitle>
        <p className="text-muted-foreground">
          I'd love to hear from you. Send me a message and I'll respond as soon
          as possible.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center justify-center text-green-600 bg-green-50 p-3 rounded-md">
              <CheckCircle className="w-5 h-5 mr-2" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center justify-center text-red-600 bg-red-50 p-3 rounded-md">
              <AlertCircle className="w-5 h-5 mr-2" />
              Failed to send message. Please try again later.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
