import { IconExternalLink } from '@tabler/icons-react';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const LPProfile = (props: IMainProps) => (
  <div className="w-full px-1  text-gray-700 antialiased">
    {props.meta}
    {/* <Header /> */}
    <div className="mx-auto max-w-screen-md no-underline">
      <main className="content px-3 py-5">{props.children}</main>
      <footer className="flex h-1/4 justify-between border-t border-gray-300 py-20 text-center text-sm ">
        <div>© Copyright 2023 {AppConfig.title}</div>
        <div className="flex items-start justify-start gap-4">
          <a
            className="hover:border-0"
            target="_blank"
            href="https://huongnhdh.github.io/blog/"
          >
            Blogs
            <IconExternalLink className="ml-1 inline" size={15} />
          </a>
          <h6>Friends:</h6>
          <a
            className="inline hover:border-0"
            target="_blank"
            href="https://github.com/ducla5"
          >
            ducla5
            <IconExternalLink className="ml-1 inline" size={15} />
          </a>
        </div>
      </footer>
    </div>
  </div>
);

export { LPProfile };
