import { Box, Typography, useTheme } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import FlexBetween from "../../components/FlexBetween";
import { useGetAppsQuery } from "../../state/app";
import { useMemo } from "react";
import BoxHeader from "../../components/BoxHeader";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row1 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data } = useGetAppsQuery();

  const appcontent = useMemo(() => {
    return (
      data &&
      data.map(({ App, Content_Rating }) => {
        return {
          name: App.substring(0, 3),
          rating: Content_Rating,
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader title="rating" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={appcontent}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Content_Rating"
              stroke={palette.tertiary[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader title="Targets" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">The rating of few apps are</Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">ratings</Typography>

            <Typography variant="h6">Content_Rating</Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};
export default Row1;
