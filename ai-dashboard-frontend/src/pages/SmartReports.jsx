import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Download, Info } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { fetchUsers, fetchWeather } from "@/services/api";
import * as Tooltip from "@radix-ui/react-tooltip"; 

const SmartReports = () => {
  const [users, setUsers] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUsers();
      setUsers(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAllWeather = async () => {
      setLoading(true);
      const weatherResults = {};
      for (const user of users) {
        const city = user.location.city;
        const result = await fetchWeather(city);
        if (result) {
          weatherResults[user.email] = result;
        }
      }
      setWeatherData(weatherResults);
      setLoading(false);
    };
    if (users.length > 0) {
      fetchAllWeather();
    }
  }, [users]);

  const getWeatherCondition = (email) => {
    const weather = weatherData[email];
    return weather?.weather?.[0]?.main || "Unknown";
  };

  const getWeatherIcon = (email) => {
    const icon = weatherData[email]?.weather?.[0]?.icon;
    return icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;
  };

  const filteredUsers = users.filter((user) => {
    const condition = getWeatherCondition(user.email);
    const matchesFilter =
      filter === "all" ||
      (filter === "sunny" && condition === "Clear") ||
      (filter === "cloudy" && condition === "Clouds") ||
      (filter === "rainy" && condition === "Rain") ||
      user.location.country === filter;

    const matchesSearch =
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.name.last.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const summarize = () => {
    const summary = {};
    filteredUsers.forEach((user) => {
      const country = user.location.country;
      summary[country] = (summary[country] || 0) + 1;
    });
    return Object.entries(summary)
      .map(
        ([country, count]) =>
          `${country} has ${count} user${count > 1 ? "s" : ""} today`
      )
      .join(". ");
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Smart Reports", 14, 10);
    autoTable(doc, {
      head: [["Name", "Email", "Country", "City", "Weather"]],
      body: filteredUsers.map((user) => [
        `${user.name.first} ${user.name.last}`,
        user.email,
        user.location.country,
        user.location.city,
        getWeatherCondition(user.email),
      ]),
    });
    doc.save("SmartReport.pdf");
  };

  return (
    <Tooltip.Provider>
      <div className="p-6 space-y-6 dark:bg-zinc-800 dark:text-white">
        <motion.h2
          className="text-3xl font-bold text-zinc-800 dark:text-zinc-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🧾 Smart Reports Dashboard
        </motion.h2>

        <div className="flex items-center gap-3">
          <p className="text-muted-foreground text-sm">{summarize()}</p>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Info size={16} className="text-muted-foreground cursor-pointer" />
            </Tooltip.Trigger>
            <Tooltip.Content
              className="bg-black text-white px-2 py-1 rounded text-xs"
              side="top"
            >
              Summary based on currently filtered users.
            </Tooltip.Content>
          </Tooltip.Root>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList className="flex-wrap">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sunny">Sunny</TabsTrigger>
              <TabsTrigger value="cloudy">Cloudy</TabsTrigger>
              <TabsTrigger value="rainy">Rainy</TabsTrigger>
              <TabsTrigger value="India">India</TabsTrigger>
              <TabsTrigger value="USA">USA</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-60"
            />
            <Button onClick={generatePDF} variant="outline" className="gap-2">
              <Download size={16} /> Export PDF
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin h-6 w-6 text-zinc-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUsers.map((user, idx) => (
              <Card key={idx} className="hover:shadow-md transition duration-200">
                <CardContent className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">
                      {user.name.first} {user.name.last}
                    </h3>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Info size={14} className="text-muted-foreground cursor-pointer" />
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        className="bg-zinc-800 text-white px-2 py-1 rounded text-xs"
                        side="left"
                      >
                        User email: {user.email}
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </div>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-sm">
                    {user.location.city}, {user.location.country}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                      {getWeatherCondition(user.email)}
                    </p>
                    {getWeatherIcon(user.email) && (
                      <img
                        src={getWeatherIcon(user.email)}
                        alt="weather icon"
                        className="h-6 w-6"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Tooltip.Provider>
  );
};

export default SmartReports;
