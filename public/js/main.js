(function() {
  var BUTTON, INPUT_CATEGORY, INPUT_CHANNEL, INPUT_ORIG_URL, INPUT_SOURCE, INPUT_SUBCATEGORY, INPUT_TARGETING, RESULT_URL, build_url;

  BUTTON = document.getElementById('btn-submit');

  INPUT_ORIG_URL = document.getElementById('input-orig-url');

  INPUT_SOURCE = document.getElementById('input-source');

  INPUT_CHANNEL = document.getElementById('input-channel');

  INPUT_TARGETING = document.getElementById('input-targeting');

  INPUT_CATEGORY = document.getElementById('input-category');

  INPUT_SUBCATEGORY = document.getElementById('input-subcategory');

  RESULT_URL = document.getElementById('result-url');

  window.onload = function() {
    return BUTTON.addEventListener('click', build_url);
  };

  build_url = function() {
    return RESULT_URL.innerHTML = "" + INPUT_ORIG_URL.value + "?utm_source=" + INPUT_SOURCE.value + "&utm_medium=" + INPUT_CHANNEL.value + "&utm_campaign=" + INPUT_TARGETING.value + "_" + INPUT_CATEGORY.value + "_" + INPUT_SUBCATEGORY.value;
  };

}).call(this);
