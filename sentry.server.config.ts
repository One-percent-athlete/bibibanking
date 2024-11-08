// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://01a20b5fc05073524cc97c15341504c2@o4508261784092672.ingest.de.sentry.io/4508261785862224",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
