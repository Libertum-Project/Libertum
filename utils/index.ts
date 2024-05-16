export const createLookup = (tokens: any) => {
  const TOKENS_BY_SYMBOL: Record<string, Token> = {};
  const TOKENS_BY_ADDRESS: Record<string, Token> = {};

  tokens.forEach((token: any) => {
    TOKENS_BY_SYMBOL[token.symbol?.toLowerCase()] = token;
    TOKENS_BY_ADDRESS[token.address?.toLowerCase()] = token;
  });

  return { TOKENS_BY_SYMBOL, TOKENS_BY_ADDRESS };
};
