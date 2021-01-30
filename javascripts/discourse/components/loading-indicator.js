import Component from "@ember/component";
import { inject as service } from "@ember/service";
import discourseComputed from "discourse-common/utils/decorators";
import { readOnly } from "@ember/object/computed";

export default Component.extend({
  loadingIndicator: service(),

  classNames: "loading-indicator-container",
  classNameBindings: "loading",

  loading: readOnly("loadingIndicator.loading"),
});
