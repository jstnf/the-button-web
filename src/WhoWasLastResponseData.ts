interface WhoWasLastEntry {
  name: string;
  time: number;
}

export default interface WhoWasLastResponseData {
  users: WhoWasLastEntry[];
}
