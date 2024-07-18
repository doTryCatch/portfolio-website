// const GITHUB_USERNAME = "doTryCatcn";
// // const GITHUB_TOKEN = "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";
// const GITHUB_TOKEN =
//   "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";
// // Octokit.js

const fetchGitHubRepos = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/doTryCatch/repos`
      //   {
      //     headers,
      //   }
    );
    const reposData = await reposResponse.json();

    if (reposResponse.status !== 200) {
      console.error("Repositories:", reposData);
      return;
    }

    console.log("Repositories:", reposData);
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
  }
};
// curl --request GET  --url "https://api.github.com/octocat" --header "Authorization: Bearer " --header "X-GitHub-Api-Version: 2022-11-28"
fetchGitHubRepos();
