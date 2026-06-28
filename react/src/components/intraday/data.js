const strategyData = [
  {
    id: 1,
    title: "Main Idea of the Strategy",
    description:
      "The goal of the AB Candle Strategy is to trade only when there is enough market movement. Instead of guessing the market direction, the strategy waits for the price to confirm a breakout above the High for a Buy or below the Low for a Sell, reducing the chances of entering weak or uncertain trades.",
  },
  {
    id: 2,
    title: "What is an AB Candle?",
    description:
      "An AB candle is a candle whose total range (High to Low) is large enough compared to its Closing Price. It indicates that the market has shown sufficient movement, making it a potential trading opportunity.",
  },
  {
    id: 3,
    title: "Why Check the Candle Size?",
    description:
      "Small candles usually indicate a sideways or slow-moving market. Larger candles suggest stronger buying or selling activity, increasing the probability of a meaningful breakout.",
  },
  {
    id: 4,
    title: "Why Compare High - Low with 0.5% of the Close?",
    description:
      "The strategy filters out weak candles by ensuring the candle's total range is at least 0.5% of its Closing Price. This helps focus only on candles with sufficient volatility.",
  },
  {
    id: 5,
    title: "When is a Candle Valid?",
    description:
      "A candle is considered valid when the Closing Price lies between the High and Low, and the candle's range (High - Low) is greater than or equal to 0.5% of the Closing Price.",
  },
  {
    id: 6,
    title: "Buy Strategy",
    description:
      "A Buy trade is taken only after the price breaks above the candle's High. This confirms bullish momentum. The Stop-loss is placed at the candle's Low, and the Target is set equal to the candle's range, maintaining a 1:1 Risk-Reward ratio.",
  },
  {
    id: 7,
    title: "Sell Strategy",
    description:
      "A Sell trade is taken only after the price breaks below the candle's Low. This confirms bearish momentum. The Stop-loss is placed at the candle's High, and the Target is set equal to the candle's range, maintaining a 1:1 Risk-Reward ratio.",
  },
  {
    id: 8,
    title: "Gap Up / Gap Down Confirmation",
    description:
      "Instead of entering immediately at the High or Low, the strategy waits for the price to move approximately 0.5% beyond those levels. This extra confirmation helps reduce false breakouts.",
  },
  {
    id: 9,
    title: "Why Use a 1:1 Risk-Reward Ratio?",
    description:
      "A 1:1 Risk-Reward ratio means the expected profit is equal to the amount being risked. This keeps the trading approach simple, disciplined, and easier to manage over multiple trades.",
  },
  {
    id: 10,
    title: "When Should You Avoid This Strategy?",
    description:
      "Avoid using this strategy when the candle range is too small, the market is moving sideways, trading volume is low, or the candle does not satisfy the validation conditions.",
  },
];

export default strategyData