import Service from "@ember/service";
import { get } from "@ember/object";

export default Service.extend({
  start() {
    this.set("loading", true);
  },

  end() {
    this.set("loading", false);
  },
});
