import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { equal } from "@ember/object/computed";
import { next } from "@ember/runloop";

export default Component.extend({
  loadingIndicator: service(),

  classNames: "loading-indicator-container",
  classNameBindings: ["ready", "loading", "done"],

  state: "ready",

  ready: equal("state", "ready"),
  loading: equal("state", "loading"),
  done: equal("state", "done"),

  stateChanged(loading) {
    if (loading && this.ready) {
      this.set("state", "loading");
    } else if (loading) {
      this.set("state", "ready");
      next(() => this.set("state", "loading"));
    } else {
      this.set("state", "done");
    }
  },

  didInsertElement() {
    this.loadingIndicator.on("stateChanged", this, "stateChanged");

    this.element.addEventListener("transitionend", (event) => {
      if (event.target == this.element && event.propertyName == "opacity") {
        this.set("state", "ready");
      }
    });
  },

  willDestroyElement() {
    this.loadingIndicator.off("stateChange", this, "stateChange");
  },
});
