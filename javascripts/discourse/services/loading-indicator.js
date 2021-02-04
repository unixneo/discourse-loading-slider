import Service from "@ember/service";
import Evented from "@ember/object/evented";
import { schedule } from "@ember/runloop";

export default Service.extend(Evented, {
  start() {
    this.set("loading", true);
    this.trigger("stateChanged", true);
    schedule("afterRender", () => {
      document.body.classList.add("loading");
    });
  },

  end() {
    this.set("loading", false);
    this.trigger("stateChanged", false);
    schedule("afterRender", () => {
      document.body.classList.remove("loading");
    });
  },
});
