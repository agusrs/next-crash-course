import Link from 'next/link';
import React from 'react'

async function fetchRepoContents(name: string) {
  const res = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
    next: {
      revalidate: 60
    }
  })

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const contents = await res.json()

  return contents;
}

const RepoDirs = async ({ name }: { name: string }) => {
  const contents = await fetchRepoContents(name);

  const dirs = contents.filter((content: any) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;