//* * Import Icons */
import {
  IconAppWindow,
  IconBrandAws,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconDatabaseHeart,
  IconMail,
  IconMapPinFilled,
} from '@tabler/icons-react';
import { useMemo } from 'react';

import { Meta } from '@/layouts/Meta';
import { LPProfile } from '@/templates/LPProfile';

const contacts = (size = 25) => [
  {
    name: 'LinkedIn',
    icon: <IconBrandLinkedin size={size} />,
    href: 'https://www.linkedin.com/in/huongnhd/',
  },
  {
    name: 'Github',
    icon: <IconBrandGithub size={size} />,
    href: 'https://github.com/huongnhdh',
  },
  {
    name: 'Telegram',
    icon: <IconBrandTelegram size={size} />,
    href: 'https://t.me/snoopimimi',
  },
];

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

export default function Index() {
  const features = useMemo(() => {
    return [
      {
        icon: <IconAppWindow size={36} />,
        years: new Date().getFullYear() - 2016,
        domain: 'Web Dev',
      },
      {
        icon: <IconDatabaseHeart size={36} />,
        years: new Date().getFullYear() - 2016,
        domain: 'Database',
      },
      {
        icon: <IconBrandAws size={36} />,
        years: new Date().getFullYear() - 2019,
        domain: 'Cloud',
      },
    ];
  }, []);
  const skills = useMemo(() => {
    return [
      {
        category: 'Programing Language',
        name: 'HTML, CSS, JS, Typescript, Ruby',
        color: 'green',
      },
      {
        category: 'FrontEnd',
        name: 'Convert designs from Figma or Adobe XD into code using ReactJS or Vue.js with various UI kits such as Material UI (MUI), Chakra UI, Bulma, or plain SCSS ',
        color: 'green',
      },
      {
        category: 'BackEnd',
        name: (
          <>
            Design REST API <br /> Serverless on Google Cloud Functions, AWS
            Lambda. <br /> Handle batch processing
          </>
        ),
        color: 'green',
      },
      {
        category: 'DevOps',
        name: 'CI/CD Github Action, Terraform, Docker, Scrum ',
        color: 'green',
      },
      {
        category: 'Database',
        name: 'Database design in SQL and NoSQL with MySQL, Postgresql, FireStore, ...',
        color: 'green',
      },
      {
        category: 'Test Driven Development',
        name: 'UT with Jest, Rspec, e2e with Cypress',
        color: 'green',
      },
      {
        category: 'Framework',
        name: 'ReactJs, NextJS, NestJS, RubyOnRails, VueJs',
        color: 'green',
      },
      {
        category: 'Cloud Integration',
        name: 'Google Firebase, CloudFunction, AWS Cognito, AWS Lambda, AWS S3, AWS ECR, ECS',
        color: 'green',
      },
    ];
  }, []);
  const educations = useMemo(() => {
    return [
      {
        name: 'AWS Developer Certificate',
        time: '07-2022',
        isCert: true,
        image: 'aws-certified-developer-associate.png',
        link: 'https://www.credly.com/badges/eabe3a58-9a9b-446d-ae57-e4599f5ec723/public_url',
      },
      {
        name: 'Software engineering at Can Tho University',
        time: '2012~2016',
        isCert: false,
        link: '',
      },
    ];
  }, []);

  const companies = useMemo(() => {
    return [
      {
        name: 'Shift Asia',
        fromTime: new Date(2020, 11),
        title: 'FullStack developer',
        toTime: null,
        desc: '',
      },
      {
        name: 'LiFull Tech VN',
        toTime: new Date(2020, 11),
        fromTime: new Date(2018, 8),
        title: 'Software engineer',
        desc: '',
      },
      {
        name: 'Topica Edtech Group',
        toTime: new Date(2017, 11),
        fromTime: new Date(2017, 3),
        title: 'FullStack developer',
        desc: '',
      },
      {
        name: 'Evolable Asia',
        toTime: new Date(2017, 10),
        fromTime: new Date(2016, 10),
        title: 'BackEnd developer',
        desc: '',
      },
      {
        name: 'Evolable Asia',
        toTime: new Date(2016, 10),
        fromTime: new Date(2016, 4),
        title: 'Internship',
      },
    ];
  }, []);
  return (
    <LPProfile
      meta={
        <Meta
          title="HuongNHDH Personal site"
          description="HuongNHDH Personal site"
        />
      }
    >
      <div className="flex flex-col items-center justify-between  p-4 md:flex-row">
        <div className="flex max-w-7xl flex-col items-center gap-4 md:flex-row md:gap-1">
          <div className="flex h-[5rem] sm:w-full md:w-auto ">
            <img
              className="h-[5rem] rounded-full p-1 ring-2 ring-purple-300 dark:ring-gray-500"
              src="https://avatars.githubusercontent.com/u/13867138"
              alt="Bordered avatar"
            />
          </div>
          <div className="hidden flex-col items-start md:flex	">
            <div className="flex w-full flex-col text-center  md:flex-row">
              <span className="ml-4 text-xl">
                Hi, I&apos;m{' '}
                <strong className="text-gray-900">Huong Ngo</strong>
                ,&nbsp;
              </span>
              <span className="mb-2 text-xl">
                i&apos; m a software engineer
              </span>
            </div>
            <small className="ml-4 inline-flex justify-center gap-4 align-middle">
              <div>
                <IconMapPinFilled size={20} className="inline" />
                <span>HCM, VietNam</span>
              </div>
              <div>
                <a
                  href="mailto:huong.nhdh@gmail.com"
                  className="text-inherit hover:border-0"
                >
                  <IconMail size={20} className="inline" />
                  <span> huong.nhdh@gmail.com</span>
                </a>
              </div>
            </small>
          </div>
          <div className="flex flex-col items-start md:hidden	">
            <div className="flex w-full flex-col text-center  md:flex-row">
              <span className="ml-4 text-xl">
                Hi, I&apos;m <strong className="text-black">Huong Ngo</strong>
              </span>
              <span className="mb-2 text-sm">
                I&apos;m a software engineer base in HCM, VietNam
                {/* <IconMapPinFilled size={20} className="ml-2 inline" /> */}
              </span>
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-row justify-center gap-2 md:hidden md:justify-end">
            <a
              href="mailto:huong.nhdh@gmail.com"
              className="flex h-9 w-9 items-center justify-center gap-2 rounded-full bg-purple-600 text-center text-sm font-medium text-white shadow-sm  hover:border-0  focus:outline-none "
            >
              <IconMail size={16} className="inline" />
            </a>
            {contacts(16).map((c, index) => {
              return (
                <a
                  target="_blank"
                  key={index}
                  href={c.href}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center gap-2 rounded-full bg-purple-600 text-center text-sm font-medium text-white shadow-sm  hover:border-0  focus:outline-none "
                >
                  {c.icon}
                </a>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="hidden max-w-7xl flex-row gap-2 md:flex md:flex-row md:justify-end">
          {contacts(25).map((c, index) => {
            return (
              <div key={c.name}>
                <a
                  target="_blank"
                  key={index}
                  href={c.href}
                  type="button"
                  className="flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:border-0 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                >
                  {c.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <section id="features" className="md:my-20">
        <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-3">
          {features.map((f, index) => (
            <div
              key={index}
              className="card flex flex-row items-center justify-start bg-white md:h-40 md:flex-col md:items-center md:justify-center md:text-center"
            >
              {f.icon}
              <div className="flex flex-row md:flex-col md:gap-0">
                <div className="ml-2 md:m-auto">
                  <strong> {f.years}+ years</strong>
                </div>
                <div className="">
                  <span className="ml-1 md:inline">in</span>
                  <span> {f.domain}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="skills" className="my-10">
        <h3 className="text-xl font-semibold">Skills</h3>
        <hr className="my-5" />
        <div className="card">
          {skills.map((k, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-12">
                  <small className="col-span-4">{k.category}: </small>
                  <div className="col-span-8 font-normal">{k.name}</div>
                </div>
                <hr className="my-5" />
              </div>
            );
          })}
        </div>
      </section>
      <section id="language" className="my-10">
        <h3 className="text-xl font-semibold">Languages</h3>
        <hr className="my-5" />
        <div className="my-5 flex flex-col gap-2 p-2 md:flex-row">
          <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            Vietnamese: Native
          </span>
          <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            English: Working Proficiency
          </span>
        </div>
      </section>
      <section id="projects" className="my-5 ">
        <h3 className="text-xl font-semibold">The Companies worked for</h3>
        <hr className="my-5" />

        <div className="p-4">
          <ol className="relative  border-l  border-l-gray-200  dark:border-l-purple-300">
            {companies.map((c, index) => {
              return (
                <li className="mb-10 ml-4 flex" key={index}>
                  <div
                    className={`absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full  ${
                      index === 0
                        ? ' bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700'
                        : 'bg-gray-600'
                    } `}
                  />
                  <time className=" absolute  mb-1 mt-1.5 h-3 text-sm font-normal leading-none">
                    {dateFormatter.format(c.fromTime)} ~
                    {!c.toTime ? 'now' : dateFormatter.format(c.toTime)}
                  </time>

                  <span className="mt-8 text-lg font-normal text-gray-900 dark:text-white">
                    {c.title} at {c.name}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <section id="certs" className="my-5">
        <h3 className="my-5 text-xl font-semibold">Certificates</h3>
        <hr className="my-5" />
        {educations
          .filter((e) => e.isCert)
          .map((edu, index) => {
            return (
              <div
                key={index}
                className="flex max-w-sm flex-col justify-center border p-4"
              >
                <div className="flex w-full items-center justify-center">
                  <a
                    className="hover:border-b-0"
                    target="_blank"
                    href={edu.link}
                  >
                    <img
                      className="h-auto max-w-full"
                      src={`/assets/certs/${edu.image}`}
                      alt={edu.image}
                    />
                  </a>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 p-5">
                  <h6 className=" mb-2 font-bold tracking-tight  dark:text-white">
                    {edu.name} at <time>{edu.time}</time>
                  </h6>
                  <a
                    target="_blank"
                    href={edu.link}
                    className="rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:border-b-0 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                  >
                    Verify in Credly.com link
                  </a>
                </div>
              </div>
            );
          })}
      </section>
      <section id="education" className="my-5">
        <h3 className="text-xl font-semibold">Education</h3>
        <hr className="my-5" />
        <div className="card">
          {educations
            .filter((e) => !e.isCert)
            .map((edu, index) => {
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12">
                  <time className="col-span-4 text-sm">{edu.time}</time>
                  <div className="col-span-8">{edu.name}</div>
                </div>
              );
            })}
        </div>
      </section>
    </LPProfile>
  );
}
