type projectSchemaType = {
  heading: string;
  techstack: { name: string }[];
  thumbnail: File | null;
  githubLinkUrl: string;
};

const projectSchema: projectSchemaType = {
  heading: "",
  techstack: [], // Array of tech stack
  thumbnail: null, // Thumbnail will be a File object
  githubLinkUrl: "",
};

type blogSchemaType = {};

export { projectSchema };
