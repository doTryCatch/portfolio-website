import React, { useEffect, useState } from "react";
import axios from "axios";
import HeatMap from "@rp-raone/cal-heatmap";

const token = process.env.NEXT_PUBLIC_GITHUB_SECRET_KEY;
const username = "doTryCatch";

const GithubStat: React.FC<{ date: number }> = ({ date }) => {
  const [stats, setStats] = useState<Record<string, number> | null>(null);

  // Fetch GitHub contributions whenever `date` changes
  useEffect(() => {
    const fetchGitHubContributions = async () => {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection(from: "${date}-01-01T00:00:00Z", to: "${date}-12-31T23:59:59Z") {
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

        const weeks =
          response.data.data.user.contributionsCollection.contributionCalendar
            .weeks;

        const contributions: Record<string, number> = {};
        weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            contributions[day.date] = day.contributionCount;
          });
        });

        setStats(contributions);
      } catch (error: any) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchGitHubContributions();
  }, [date]);
  console.log(date)

  return (
    <div className="text-white card-color p-4 rounded-sm overflow-x-scroll">
      {stats && (
        <HeatMap
        key={date}
          data={stats}
          year={date!=null?date: 2025} // Pass the selected year to the HeatMap
        />
      )}
    </div>
  );
};

export default GithubStat;
