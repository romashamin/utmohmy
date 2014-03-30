(function() {
  var FORM, RESULT_URL, SPANS, SUBCAT_, build_url, spaces_to_hyphens;

  FORM = {
    input_orig_url: document.querySelector('#input-orig-url'),
    input_source: document.querySelector('#input-source'),
    input_channel: document.querySelector('#input-channel'),
    input_targeting: document.querySelector('#input-targeting'),
    input_category: document.querySelector('#input-category'),
    input_subcategory: document.querySelector('#input-subcategory')
  };

  SPANS = {
    input_orig_url: 'span-orig-url',
    input_source: 'span-source',
    input_channel: 'span-channel',
    input_targeting: 'span-targeting',
    input_category: 'span-category',
    input_subcategory: 'span-subcategory'
  };

  RESULT_URL = document.querySelector('#result-url');

  SUBCAT_ = '_';

  window.onload = function() {
    var input, input_name;
    FORM.input_orig_url.value = 'https://ohmystats.com';
    FORM.input_source.value = 'ohmyblog';
    FORM.input_channel.value = 'blog';
    FORM.input_targeting.value = '00';
    FORM.input_category.value = 'marketing';
    FORM.input_subcategory.value = 'utm-tags';
    build_url();
    for (input_name in FORM) {
      input = FORM[input_name];
      input.addEventListener('input', function() {
        var _ref;
        if ((_ref = this.value) === null || _ref === '') {
          this.classList.add('invalid');
          if (this.id === 'input-subcategory') {
            SUBCAT_ = '';
          }
        } else {
          this.classList.remove('invalid');
          if (this.id === 'input-subcategory') {
            SUBCAT_ = '_';
          }
        }
        return build_url();
      });
      input.addEventListener('focus', function() {
        var span_id;
        span_id = "#" + (this.id.replace(/input-/, 'span-'));
        document.querySelector(span_id).classList.add('highlighted');
        return this.focused = true;
      }, false);
      input.addEventListener('blur', function() {
        var span_id;
        span_id = "#" + (this.id.replace(/input-/, 'span-'));
        document.querySelector(span_id).classList.remove('highlighted');
        return this.focused = false;
      }, false);
    }
    return RESULT_URL.addEventListener('click', function() {
      var range;
      if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(this.id));
        return range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(document.getElementById(this.id));
        return window.getSelection().addRange(range);
      }
    }, false);
  };

  build_url = function() {
    var classes, input, input_name, part_category, part_channel, part_orig_url, part_source, part_subcategory, part_targeting;
    classes = {
      input_orig_url: '',
      input_source: '',
      input_channel: '',
      input_targeting: '',
      input_category: '',
      input_subcategory: ''
    };
    for (input_name in FORM) {
      input = FORM[input_name];
      if (input.focused === true) {
        classes[input_name] = 'highlighted';
      } else {
        classes[input_name] = '';
      }
    }
    part_orig_url = "<span id=" + SPANS.input_orig_url + " class=" + classes.input_orig_url + ">" + (encodeURI(spaces_to_hyphens(FORM.input_orig_url.value))) + "</span>";
    part_source = "<span id=" + SPANS.input_source + " class=" + classes.input_source + ">" + (encodeURIComponent(spaces_to_hyphens(FORM.input_source.value))) + "</span>";
    part_channel = "<span id=" + SPANS.input_channel + " class=" + classes.input_channel + ">" + (encodeURIComponent(spaces_to_hyphens(FORM.input_channel.value))) + "</span>";
    part_targeting = "<span id=" + SPANS.input_targeting + " class=" + classes.input_targeting + ">" + (encodeURIComponent(spaces_to_hyphens(FORM.input_targeting.value))) + "</span>";
    part_category = "<span id=" + SPANS.input_category + " class=" + classes.input_category + ">" + (encodeURIComponent(spaces_to_hyphens(FORM.input_category.value))) + "</span>";
    part_subcategory = "<span id=" + SPANS.input_subcategory + " class=" + classes.input_subcategory + ">" + (encodeURIComponent(spaces_to_hyphens(FORM.input_subcategory.value))) + "</span>";
    return RESULT_URL.innerHTML = "" + part_orig_url + "?utm_source=" + part_source + "&utm_medium=" + part_channel + "&utm_campaign=" + part_targeting + "_" + part_category + SUBCAT_ + part_subcategory;
  };

  spaces_to_hyphens = function(str) {
    return str.replace(/\s+/g, '-');
  };

}).call(this);
