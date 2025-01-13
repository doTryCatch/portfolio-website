import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as CalHeatmap from "cal-heatmap";  // Use * import if it's not default
import "cal-heatmap/cal-heatmap.css";

<<<<<<< HEAD
const token = "";
=======
>>>>>>> a5f0683 (fixed:github rule voilation error)
const username = "doTryCatch";

const GithubStat: React.FC = () => {
  const [stats, setStats] = useState<Record<string, number> | null>(null);
  const heatmapRef = useRef<HTMLDivElement | null>(null);

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
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchGitHubContributions();
  }, []);

  useEffect(() => {
    if (stats && heatmapRef.current) {
      const cal =  new (CalHeatmap as any)();  // Using constructor directly

      cal.paint({
        itemSelector: heatmapRef.current,
        domain: { type: "month", label: { position: "top" } },
        subDomain: { type: "day", label: false },
        range: 12,
        data: stats,
        scale: {
          color: {
            type: "linear",
            domain: [0, 5, 10, 20],
            range: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
          },
        },
        legend: [0, 5, 10, 15, 20],
        tooltip: {
          enabled: true,
          formatter: (date:Date, value:number) => `${date.toDateString()}: ${value || 0} contributions`,
        },
      });
    }
  }, [stats]);

  return (
    <div>
      <h1>GitHub Contribution Heatmap</h1>
      <div ref={heatmapRef} id="heatmap" style={{ height: "200px" }}></div>
    </div>
  );
};

export default GithubStat;
