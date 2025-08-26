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
    <Card className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
      <CardHeader className="text-center pb-4 sm:pb-6">
        <CardTitle className="text-xl sm:text-2xl font-serif text-primary mb-2">
          Get in Touch
        </CardTitle>
        <p className="text-sm sm:text-base text-muted-foreground px-2">
          I'd love to hear from you. Send me a message and I'll respond as soon
          as possible.
        </p>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-2 ">
            <Label htmlFor="name" className="text-sm sm:text-base font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="name" 
              name="name" 
              required 
              className="h-11 sm:h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-gray-300 rounded-md p-4"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm sm:text-base font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="h-11 sm:h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-gray-300 rounded-md p-4"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm sm:text-base font-medium">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={4} 
              required 
              className="min-h-[100px] sm:min-h-[120px] text-base resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-gray-300 rounded-md p-4"
              placeholder=""
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 h-11 sm:h-12 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent mr-2" />
                <span className="animate-pulse">Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center justify-center text-green-700 bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg animate-fade-in-up">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium text-center">
                Message sent successfully! I'll get back to you soon.
              </span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center justify-center text-red-700 bg-red-50 border border-red-200 p-3 sm:p-4 rounded-lg animate-fade-in-up">
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium text-center">
                Failed to send message. Please try again later.
              </span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
