export type CurrQuestion = string;

export type AllQuestions = {
  [key: string]: AllValues
}

export type Responses = {
  [key: string]: "yes" | "no"
}

export type AllValues = {
  wording: string,
  if_yes_ask: [] | string[],
  if_no_ask: [] | string[]
}