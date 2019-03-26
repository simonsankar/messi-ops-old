// import axios from "axios";
const axios = require("axios");

// URLs
const CURR_SEASON =
  "https://www.whoscored.com/StatisticsFeed/1/GetPlayerStatistics?category=summary&subcategory=all&statsAccumulationType=0&isCurrent=true&playerId=11119&teamIds=&matchId=&stageId=&tournamentOptions=&sortBy=Rating&sortAscending=&age=&ageComparisonType=&appearances=&appearancesComparisonType=&field=Overall&nationality=&positionOptions=&timeOfTheGameEnd=&timeOfTheGameStart=&isMinApp=false&page=&includeZeroValues=true&numberOfPlayersToPick=";
const EURO_BOOT = "";
const TOP_ASSISTS = "";

const ops = {
  async getCurrSeason() {
    const { data } = await axios.get(CURR_SEASON);
    console.log(data);
    return data;
  }
};
export default ops;
ops.getCurrSeason();
