interface Techstack {
  create: { name: string }[];
}

interface FormData {
  heading: string;
  description: string;
  techstack: Techstack;
  time: string;
  // thumbnail: Buffer | null; // Correctly typed as a File instance or null
  githubLinkUrl: string;
}

// Initialize state with correct typing
const projectSchema: FormData = {
  heading: "",
  description: "",
  techstack: {
    create: [{ name: "" }], // Initial tech stack with an empty object
  },
  time: new Date().toISOString(),
  // thumbnail: null, // Initialize as null
  githubLinkUrl: "",
};

export { projectSchema };
