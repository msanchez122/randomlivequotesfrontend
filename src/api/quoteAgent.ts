import { quote } from "../model/quote";
import {requests} from "./agent";

const url = "/quote";
const Quotes = {
  random: () => requests.get<quote>(url),
  create: (quote : quote) => requests.post<void>(url,quote )
};

export default Quotes;