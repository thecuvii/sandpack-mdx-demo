import { readFileSync } from 'fs';
import { GetServerSideProps } from 'next';
import { join } from 'path';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { remarkSandpack } from '../sandpack-remark-source';
import { Sandpack } from '@codesandbox/sandpack-react';

interface Props {source:string}

const MDXRemotePage: React.FC<Props> = ({source}) => {
  return <div>
    <MDXProvider>
      <MDXRemote compiledSource={source} components={{Sandpack}}/>
    </MDXProvider>
  </div>;
};

export default MDXRemotePage;

export const getServerSideProps:GetServerSideProps = async()=>{
  const source = readFileSync(join(process.cwd(),'/sandpack-demo/sandpack.mdx'),'utf8')
  
 const {compiledSource} = await serialize(source,{mdxOptions:{remarkPlugins:[remarkSandpack], format:'mdx'}})

  return {
    props:{
      source:compiledSource
    }
  }
}
