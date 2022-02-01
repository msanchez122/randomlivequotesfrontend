import { quote } from "../model/quote";
import {requests} from "./agent";

const Quotes = {
  random: async () => requests.get<quote>("/quote"),

};

export default Quotes;