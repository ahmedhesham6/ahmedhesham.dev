export interface PinnedRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string | null;
  languageColor: string | null;
  forks: number;
}

const GITHUB_USERNAME = 'ahmedhesham6';

const QUERY = `
{
  user(login: "${GITHUB_USERNAME}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          primaryLanguage {
            name
            color
          }
          forkCount
        }
      }
    }
  }
}`;

export async function fetchPinnedRepos(): Promise<PinnedRepo[]> {
  const token = import.meta.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('GITHUB_TOKEN not set — pinned repos will be empty.');
    return [];
  }

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: QUERY }),
  });

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status}`);
    return [];
  }

  const json = await res.json();
  const nodes = json?.data?.user?.pinnedItems?.nodes ?? [];

  return nodes.map(
    (repo: {
      name: string;
      description: string;
      url: string;
      stargazerCount: number;
      primaryLanguage: { name: string; color: string } | null;
      forkCount: number;
    }): PinnedRepo => ({
      name: repo.name,
      description: repo.description ?? '',
      url: repo.url,
      stars: repo.stargazerCount,
      language: repo.primaryLanguage?.name ?? null,
      languageColor: repo.primaryLanguage?.color ?? null,
      forks: repo.forkCount,
    }),
  );
}
