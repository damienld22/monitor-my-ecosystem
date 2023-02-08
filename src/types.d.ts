export type Technology = {
  id: string;
  githubPackage: string;
  category: string;
  language: string;
};

export type NewTechnology = Omit<Technology, "id">;
