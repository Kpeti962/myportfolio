'use client';
import React from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function Home() {
  const skills = [
    'HTML',
    'SCSS',
    'Tailwind CSS',
    'JavaScript',
    'React JS',
    'Next JS',
    'PHP',
  ];

  const references = [
    {
      name: 'Vinyl App',
      url: 'https://vinyl-app-liard.vercel.app/',
      description:
        'In that webpage I used Next.js, Tailwind CSS, Supabase and Rest API. You can search vinyl albums, add them to your collection, and manage your vinyl library.',
    },
  ];

  const Card = ({ children }) => (
    <div className='bg-gradient-to-br from-slate-900/60 via-slate-800/90 to-slate-900/80 shadow-xl rounded-2xl border border-slate-800 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1'>
      {children}
    </div>
  );

  const CardHeader = ({ children }) => (
    <div className='p-7 border-b border-slate-800 bg-gradient-to-r from-indigo-950 to-slate-900 text-slate-100 rounded-t-2xl'>
      {children}
    </div>
  );

  const CardTitle = ({ children }) => (
    <h2 className='text-2xl font-bold text-slate-100 tracking-wide'>
      {children}
    </h2>
  );

  const CardContent = ({ children }) => (
    <div className='p-7'>{children}</div>
  );

  const Badge = ({ children }) => (
    <span className='px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-full shadow-lg tracking-wide border border-indigo-900'>
      {children}
    </span>
  );

  const Button = ({ children }) => (
    <button className='flex items-center gap-2 px-5 py-2 rounded-xl text-sm bg-gradient-to-r from-indigo-700 to-purple-700 text-white hover:from-indigo-900 hover:to-purple-800 shadow-lg transition mt-1 font-bold'>
      {children}
    </button>
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950'>
      <header className='w-full top-0 z-20 py-4 bg-gradient-to-br from-black/80 to-indigo-950/60 backdrop-blur-lg'>
        <div className='max-w-3xl mx-auto flex flex-col items-center gap-5'>
          <div className='w-56 h-56 rounded-full shadow-[0_8px_32px_0_rgba(53,34,98,.3)] border-4 border-indigo-700 bg-white/10 flex items-center justify-center mb-4 overflow-hidden'>
            <Image
              width={200}
              height={200}
              src='/profile.jpg'
              className='overflow-hidden scale-150'
              alt='Profile'
            />
          </div>
          <div>
            <h1 className='text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-1 tracking-tight text-center'>
              Koncz Péter
            </h1>
            <p className='text-xl font-semibold text-indigo-200 mb-2 text-center animate-fade-in'>
              Junior Frontend Developer
            </p>
            <p className='text-md text-slate-300 max-w-lg text-center mb-3'>
              Passionate about building beautiful, performant interfaces.
              <br />
              Always learning, always creating.
            </p>
          </div>
        </div>
      </header>

      <main className='max-w-4xl mx-auto px-6 py-12 space-y-12'>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-slate-200 leading-relaxed text-lg'>
                I&#39;m a passionate frontend developer with a strong foundation in
                modern web technologies. I enjoy creating clean, interactive,
                experience. Currently I am working as an intern in Budapestand
                user-friendly interfaces that deliver a great user experience.
              </p>
              <p className='text-slate-200 leading-relaxed text-lg'>
                I am currently working as an intern in Budapest for 1 year as a
                junior frontend developer and I would like to advance in the
                same field.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Reference page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-1'>
                {references.map((ref, index) => (
                  <a
                    key={index}
                    href={ref.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block p-5 border rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 shadow-lg hover:shadow-xl transition hover:-translate-y-1 hover:border-indigo-400'
                  >
                    <h3 className='font-bold text-indigo-300 mb-1 flex items-center gap-2'>
                      <ExternalLink className='w-4 h-4' />
                      {ref.name}
                    </h3>
                    <p className='text-sm text-slate-400'>{ref.description}</p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Mail className='w-5 h-5 text-indigo-400' />
                    <div>
                      <p className='font-medium text-slate-200'>Email</p>
                      <p className='text-slate-400'>kpeti962@gmail.com</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Phone className='w-5 h-5 text-indigo-400' />
                    <div>
                      <p className='font-medium text-slate-200'>Phone</p>
                      <p className='text-slate-400'>+36 30 / 646-4894</p>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <h3 className='font-medium text-slate-200 mb-3'>
                    Connect with me
                  </h3>
                  <div className='flex gap-3'>
                    <a
                      href='https://github.com/Kpeti962'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button>
                        <Github className='w-4 h-4' />
                        GitHub
                        <ExternalLink className='w-3 h-3' />
                      </Button>
                    </a>
                    <a
                      href='https://www.linkedin.com/in/p%C3%A9ter-koncz-53304720b/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button>
                        <Linkedin className='w-4 h-4' />
                        LinkedIn
                        <ExternalLink className='w-3 h-3' />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      
    </div>
  );
}
