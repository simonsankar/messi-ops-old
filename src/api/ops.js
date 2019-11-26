import axios from "axios";
import moment from "moment";

// URLs
const CORS = "https://secret-ocean-49799.herokuapp.com/";
const CORSX = "https://cors-anywhere.herokuapp.com/";
// Stats
const CURR_SEASON =
  "https://www.transfermarkt.com/lionel-messi/leistungsdaten/spieler/28003/plus/0?saison=";
const CAREER =
  "https://www.transfermarkt.com/lionel-messi/leistungsdaten/spieler/28003";

const EURO_BOOT = "";
const TOP_ASSISTS = "";

const ops = {
  async getCurrSeason() {
    const { data } = await axios.get(`${CORSX}${CURR_SEASON}`);
    console.log(data);
    return data;
  }
};
export default ops;
