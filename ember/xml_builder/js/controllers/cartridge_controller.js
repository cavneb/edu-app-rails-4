var CustomField = require('../lib/custom_field');

var CartridgeController = Ember.ObjectController.extend({
  addConfigOption: function() {
    configOption = configOption.create();
    this.get('model').get('config_options').pushObject(configOption);
  },

  addCustomField: function() {
    customField = CustomField.create();
    this.get('model').get('custom_fields').pushObject(customField);
  },

  popoverObserver: function() {
    Ember.run.next(this, function() {
      Em.$('*[data-toggle="popover"]').popover({
        container: 'body', 
        trigger: 'focus'
      });
    });
  }.observes('useEditorButton', 'useLinkSelection', 'useHomeworkSubmission', 'useCourseNavigation', 
             'useAccountNavigation', 'useUserNavigation', 'custom_fields.@each'),

  removeCustomField: function(cf) {
    this.get('model').get('custom_fields').removeObject(cf);
  }
});

module.exports = CartridgeController;

