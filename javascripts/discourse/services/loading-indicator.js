import Service from "@ember/service";
import Evented from "@ember/object/evented";

export default Service.extend(Evented, {
  start() {
    this.set("loading", true);
    this.trigger("stateChanged", true);
  },

  end() {
    this.set("loading", false);
    this.trigger("stateChanged", false);
  },
});
