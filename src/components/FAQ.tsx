'use client'
import { Accordion } from 'flowbite-react'
import React from 'react'

export default function CollapseAll() {
  return (
    <Accordion collapseAll className='mx-2 lg:w-[60rem] border-none rounded-none font-primary text-base'>
      <Accordion.Panel className='first:rounded-none last:rounded-none'>
        <Accordion.Title className='text-white text-lg first:rounded-none last:rounded-none hover:bg-transparent bg-transparent focus:bg-transparent'>
          How do I get matched to projects?
        </Accordion.Title>
        <Accordion.Content>
          <p className='mb-2 text-white dark:text-white-400'>
            <p>
              We match you to projects using your preferences. This means technologies, languages, tools you want to work with and interests you want to explore.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel >
        <Accordion.Title className='text-white text-lg hover:bg-transparent focus:bg-transparent bg-transparent'>
          Can I post my own projects?
        </Accordion.Title>
        <Accordion.Content>
          <p className='mb-2 text-white dark:text-white-400'>
            <p>
              Yes! We encourage you to post your own projects so you can find people to work with and scale your development.
            </p>
          </p>
          <p className='text-white dark:text-white-400'>
            <p>
              
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-white text-lg hover:bg-transparent focus:bg-transparent bg-transparent'>
          How is this different from GitHub?
        </Accordion.Title>
        <Accordion.Content>
          <p className='mb-2 text-white dark:text-white-400'>
            <p>
              GitHub is primarily a platform to store and manage code.
            </p>
          </p>
          <p className='mb-2 text-white dark:text-white-400'>
            <p>
              It&apos;s challenging to search for projects to which you would contribute. It&apos;s a sea of repositories with no clear way to discover projects matching your interests.
            </p>
          </p>
          <p className='mb-2 text-white dark:text-white-400'>
            We provide a platform to explore your interests with the resources you need to make contributions to build out your portfolio.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-white text-lg hover:bg-transparent focus:bg-transparent bg-transparent'>
          How do I join a project?
        </Accordion.Title>
        <Accordion.Content>
          <p className='mb-2 text-white dark:text-white-400'>
            <p>
              Joining a project is as easy as clicking a button.
            </p>
          </p>
          <p className='mb-2 text-white dark:text-white-400'>
            <p>
              After you join a project, we&apos;ll provide a space where you can collaborate and communcate with other contributors.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}


