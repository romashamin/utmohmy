FORM =
  input_orig_url    : document.querySelector('#input-orig-url')
  input_source      : document.querySelector('#input-source')
  input_channel     : document.querySelector('#input-channel')
  input_targeting   : document.querySelector('#input-targeting')
  input_category    : document.querySelector('#input-category')
  input_subcategory : document.querySelector('#input-subcategory')

SPANS =
  input_orig_url    : 'span-orig-url'
  input_source      : 'span-source'
  input_channel     : 'span-channel'
  input_targeting   : 'span-targeting'
  input_category    : 'span-category'
  input_subcategory : 'span-subcategory'

RESULT_URL = document.querySelector('#result-url')



window.onload = ->

  # Set Defaults
  FORM.input_orig_url.value    = 'ohmystats.com'
  FORM.input_source.value      = 'ohmyblog'
  FORM.input_channel.value     = 'cpc'
  FORM.input_targeting.value   = 'accoutrements'
  FORM.input_category.value    = 'magnanimous'
  FORM.input_subcategory.value = 'circumlocution'

  build_url()

  # Setup event listeners
  for input_name, input of FORM

    input.addEventListener('input', () ->
      if @value in [null, '']
        @classList.add('invalid')
      else
        @classList.remove('invalid')

      build_url()
    )

    input.addEventListener('focus', () ->
      span_id = "##{@id.replace(/input-/, 'span-')}"
      document.querySelector(span_id).classList.add('highlighted')
      @focused = true
    , false)

    input.addEventListener('blur', () ->
      span_id = "##{@id.replace(/input-/, 'span-')}"
      document.querySelector(span_id).classList.remove('highlighted')
      @focused = false
    , false)



build_url = ->

  classes =
    input_orig_url    : ''
    input_source      : ''
    input_channel     : ''
    input_targeting   : ''
    input_category    : ''
    input_subcategory : ''

  for input_name, input of FORM
    if input.focused is true
      classes[input_name] = 'highlighted'
    else
      classes[input_name] = ''

  RESULT_URL.innerHTML = "<span id=#{SPANS.input_orig_url} class=#{classes.input_orig_url}>#{spaces_to_hyphens(FORM.input_orig_url.value)}</span>?utm_source=<span id=#{SPANS.input_source} class=#{classes.input_source}>#{spaces_to_hyphens(FORM.input_source.value)}</span>&utm_medium=<span id=#{SPANS.input_channel} class=#{classes.input_channel}>#{spaces_to_hyphens(FORM.input_channel.value)}</span>&utm_campaign=<span id=#{SPANS.input_targeting} class=#{classes.input_targeting}>#{spaces_to_hyphens(FORM.input_targeting.value)}</span>_<span id=#{SPANS.input_category} class=#{classes.input_category}>#{spaces_to_hyphens(FORM.input_category.value)}</span>_<span id=#{SPANS.input_subcategory} class=#{classes.input_subcategory}>#{spaces_to_hyphens(FORM.input_subcategory.value)}</span>"



spaces_to_hyphens = (str) -> str.replace /\s+/g, '-'
