import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="relative bg-neutral-100 border-y border-neutral-200 text-green-950 w-full pb-14">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid gap-12 -mb-12">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-green-800 tracking-tighter text-left">Frequently Asked Questions.</h1>
          <p className="text-lg mt-4 tracking-tight text-neutral-900 text-left max-w-[900px]">Here are some of the most frequently asked questions about our organization and the work we do. If you have a question that is not answered here, please feel free to reach out to us via the contact form on this website.</p>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1" className="border-neutral-300">
              <AccordionTrigger className="text-left">Are the gardens you help start free?</AccordionTrigger>
                <AccordionContent>
                  Yes! The gardens we help start are free for the communities and schools we work with. We provide the resources and support needed to start a garden at no cost to the community or school, and we are always available to help with any questions or concerns that may arise.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-neutral-300">
              <AccordionTrigger className="text-left">How long does it take to start a garden?</AccordionTrigger>
                <AccordionContent>
                  The time it takes to start a garden can vary depending on the size and scope of the project. In general, it takes about 2-4 weeks to plan and prepare for a garden, and another 2-4 weeks to plant and maintain the garden. Our team is available to help with every step of the process and can provide guidance and support along the way.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-neutral-300">
              <AccordionTrigger className="text-left">What kind of support do you provide?</AccordionTrigger>
                <AccordionContent>
                  We provide a wide range of support to the communities and schools we work with, including resources, tools, and guidance on how to start and maintain a garden. Our team is available to answer any questions and provide support throughout the process, and we are always happy to help with any issues that may arise.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-neutral-300">
              <AccordionTrigger className="text-left">How can I get involved?</AccordionTrigger>
                <AccordionContent>
                  There are many ways to get involved with our organization, including volunteering, donating, and spreading the word about the work we do. If you are interested in getting involved, please reach out to us via the contact form on this website, and we will be happy to provide more information on how you can help.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-neutral-300">
              <AccordionTrigger className="text-left">How can I donate to your organization?</AccordionTrigger>
                <AccordionContent>
                  Donations can be made directly through our website or by contacting us via the contact form. We are a non-profit organization, and all donations are tax-deductible. Your support helps us continue to provide resources and support to communities and schools in need, and we are incredibly grateful for your generosity.
                </AccordionContent>
            </AccordionItem>
            
            
        </Accordion>
        </div>
      </div>
    </div>
  )
}

