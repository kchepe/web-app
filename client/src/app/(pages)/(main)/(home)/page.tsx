import { BasicTemplate } from '@/components/templates/basic-template';
import React from 'react';

const Home = () => {
  return (
    <BasicTemplate title="Home">
      <div className="flex flex-col gap-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
    </BasicTemplate>
  );
};

export default Home;
