import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import HeatMap from "@rp-raone/cal-heatmap"


// Your GitHub token and username
const token = process.env.NEXT_PUBLIC_GITHUB_SECRET_KEY;
const username = "doTryCatch";
const GithubStat: React.FC = () => {

  const [stats, setStats] = useState<Record<string, number> | null>(null);

  // Fetching GitHub contributions
  useEffect(() => {
    const fetchGitHubContributions = async () => {
      const query = `
        query($username: String!) {
          user(login: $username) {
              contributionsCollection {
              contributionCalendar {
                  weeks {
                  contributionDays {
                        date
                    contributionCount
                  }
                  }
              }
              }
          }
            }
      `;
            
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          { query, variables: { username } },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const weeks = response.data.data.user.contributionsCollection.contributionCalendar.weeks;
        const contributions: Record<string, number> = {};
        weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            contributions[day.date] = day.contributionCount;
          });
        });

        setStats(contributions);
      } catch (error:any) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchGitHubContributions();
  }, []);

  // Rendering the heatmap

  return (
          <div className="text-white card-color p-4 rounded-sm overflow-x-scroll">

          {stats && <HeatMap 
  data={stats}
  year={2024}
 />}
          </div>
   
  );
};

export default GithubStat;
    


 
        


 
