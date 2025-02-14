"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState, useEffect, Fragment } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DashboardPieChart = () => {
  const [data, setData] = useState([
    { name: "Projects", value: 0 },
    { name: "Blogs", value: 0 },
    { name: "Contacts", value: 0 },
  ]);

  // Fetch data from the backend API
  useEffect(() => {
    fetch(
      "https://dreams-portfolio-backend.vercel.app/api/v1/dashboard/overview"
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Fetched Data:", responseData); // Log the response to verify
        const { projects, blogs, contacts } = responseData?.data;

        // Convert the object into an array of {name, value} pairs
        const fetchedData = [
          { name: "Projects", value: projects },
          { name: "Blogs", value: blogs },
          { name: "Contacts", value: contacts },
        ];

        setData(fetchedData); // Set the data for the pie chart
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("Chart Data:", data); // Log the data to verify it is correct

  return (
    <Fragment>
      <Card className="flex items-start bg-[#050709] border-[#27272A]">
        <CardContent className="p-4 w-full h-[300px] flex flex-col">
          {/* Title Section */}
          <div className="flex-none">
            <h3 className="text-[#8750F7] text-2xl font-semibold">Overview</h3>
          </div>

          {/* Pie Chart Section */}
          <div className="flex-grow flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  content={({ payload }) => {
                    if (payload && payload.length > 0) {
                      const { name, value } = payload[0];
                      return (
                        <div className="bg-[#140C1C] text-white p-1 rounded border border-[#1d0f28]">
                          <strong>
                            {name} : {value}
                          </strong>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default DashboardPieChart;
