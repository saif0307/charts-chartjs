import BubbleChart from "@/components/BubbleChart";
import LineChart from "@/components/LineChart";
import ScatteredChart from "@/components/ScatteredChart";
import DoubleLineChart from "@/components/DoubleLineCharts";
import DataGrid from "../../components/DataGrid";
import ColoredDataGrid from "../../components/ColoredDataGrid";
import PaginatedDataGrid from "@/components/PaginatedDataGrid";
const Index = () => {
  return (
    <>
      <LineChart />
      <ScatteredChart />
      <BubbleChart />
      <DoubleLineChart />
      <DataGrid />
      <ColoredDataGrid />
      {<PaginatedDataGrid />}
    </>
  );
};

export default Index;
