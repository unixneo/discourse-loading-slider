import { apiInitializer } from "discourse/lib/api";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default apiInitializer("0.8", (api) => {
  delete Ember.TEMPLATES["loading"];

  api.modifyClass("route:application", {
    loadingIndicator: service(),

    @action
    loading(transition) {
      this.loadingIndicator.start();
      transition.promise.finally(() => {
        this.loadingIndicator.end();
      });

      return this._super();
    },
  });
});
