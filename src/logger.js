const winston = require("winston");

const dateTimeZoned = () => {
  return new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });
};

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "user-service" },
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: dateTimeZoned })
      ),
    })
  );
}

module.exports = logger;
