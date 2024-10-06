'use client';

import ProjectCard from '@/components/common/ProjectCard';
import TextSection from '@/components/common/TextSection';
import { IProject } from '@/utils/interface/Project';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GithubStats } from '@/components/common/GithubStats';
import { project } from '@/utils/interface/Project';

export default function Project() {
  return (
    <div className="">
      <TextSection icon="⚒️" text="It's My Projects." />
      <div className="my-10 hidden justify-center md:flex">
        <GithubStats />
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {project.length > 0 ? (
          project
            .slice(0)
            .reverse()
            .map((item: IProject) => (
              <ProjectCard
                {...item}
                key={item.repo || item.title} // Menggunakan repo sebagai key jika tersedia, jika tidak gunakan title
              />
            ))
        ) : (
          <Skeleton
            height={160}
            width={320}
            count={12}
            containerClassName="flex gap-2 flex-row items-center justify-center w-full flex-wrap"
          />
        )}
      </div>
    </div>
  );
}
