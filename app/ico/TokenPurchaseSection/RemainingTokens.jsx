const RemainingTokens = ({ currentStage, remainingTokens, isValidStage }) => {
  return (
    <>
      {isValidStage && (
        <h2>
          Remaining Tokens:
          {remainingTokens.seedTokensRemaining !== null ? (
            <span>
              {" "}
              {parseFloat(
                remainingTokens[`${currentStage}TokensRemaining`],
              ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          ) : (
            <span> Loading</span>
          )}
        </h2>
      )}
    </>
  );
};

export default RemainingTokens;
