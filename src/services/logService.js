//import Raven from "raven-js";

function init() {
  //sentry.io?
}

function log(error) {
  console.log("LogSerivce: ", error);
  //Raven.captureException(error);
}

export default {
  init,
  log
};
