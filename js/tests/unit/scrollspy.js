$(function () {
  'use strict'

  var ScrollSpy = typeof window.bootstrap === 'undefined' ? window.ScrollSpy : window.bootstrap.ScrollSpy

  QUnit.module('scrollspy plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.expect(1)
    assert.ok($(document.body).scrollspy, 'scrollspy method is defined')
  })

  QUnit.module('scrollspy', {
    beforeEach: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.bootstrapScrollspy = $.fn.scrollspy.noConflict()
    },
    afterEach: function () {
      $.fn.scrollspy = $.fn.bootstrapScrollspy
      delete $.fn.bootstrapScrollspy
      $('#qunit-fixture').html('')
    }
  })

  QUnit.test('should add the active class correctly when there are nested elements at 0 scroll offset', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-1" class="nav-link" href="#div-1">div 1</a>' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-2" class="nav-link" href="#div-2">div 2</a></li>' +
      '</ul>' +
      '</li>' +
      '</ul>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should add the active class correctly when there are nested elements (nav markup)', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<nav class="nav">' +
      '<a id="a-1" class="nav-link" href="#div-1">div 1</a>' +
      '<nav class="nav">' +
      '<a id="a-2" class="nav-link" href="#div-2">div 2</a>' +
      '</nav>' +
      '</nav>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should add the active class correctly when there are nested elements (nav nav-item markup)', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-1" class="nav-link" href="#div-1">div 1</a></li>' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-2" class="nav-link" href="#div-2">div 2</a></li>' +
      '</ul>' +
      '</ul>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should add the active class correctly when there are nested elements (list-group markup)', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<div class="list-group">' +
      '<a id="a-1" class="list-group-item" href="#div-1">div 1</a>' +
      '<div class="list-group">' +
      '<a id="a-2" class="list-group-item" href="#div-2">div 2</a>' +
      '</div>' +
      '</div>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should clear selection if above the first section', function (assert) {
    assert.expect(3)
    var done = assert.async()

    var sectionHTML = '<div id="header" style="height: 500px;"></div>' +
        '<nav id="navigation" class="navbar">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item"><a id="one-link"   class="nav-link active" href="#one">One</a></li>' +
        '<li class="nav-item"><a id="two-link"   class="nav-link" href="#two">Two</a></li>' +
        '<li class="nav-item"><a id="three-link" class="nav-link" href="#three">Three</a></li>' +
        '</ul>' +
        '</nav>'
    $(sectionHTML).appendTo('#qunit-fixture')

    var scrollspyHTML = '<div id="content" style="height: 200px; overflow-y: auto;">' +
        '<div id="spacer" style="height: 100px;"/>' +
        '<div id="one" style="height: 100px;"/>' +
        '<div id="two" style="height: 100px;"/>' +
        '<div id="three" style="height: 100px;"/>' +
        '<div id="spacer" style="height: 100px;"/>' +
        '</div>'
    var $scrollspy = $(scrollspyHTML).appendTo('#qunit-fixture')

    $scrollspy
      .bootstrapScrollspy({
        target: '#navigation',
        offset: $scrollspy.position().top
      })
      .one('scroll', function () {
        assert.strictEqual($('.active').length, 1, '"active" class on only one element present')
        assert.strictEqual($('.active').is('#two-link'), true, '"active" class on second section')
        $scrollspy
          .one('scroll', function () {
            assert.strictEqual($('.active').length, 0, 'selection cleared')
            done()
          })
          .scrollTop(0)
      })
      .scrollTop(201)
  })

  QUnit.test('should NOT clear selection if above the first section and first section is at the top', function (assert) {
    assert.expect(4)
    var done = assert.async()

    var sectionHTML = '<div id="header" style="height: 500px;"></div>' +
        '<nav id="navigation" class="navbar">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item"><a id="one-link"   class="nav-link active" href="#one">One</a></li>' +
        '<li class="nav-item"><a id="two-link"   class="nav-link" href="#two">Two</a></li>' +
        '<li class="nav-item"><a id="three-link" class="nav-link" href="#three">Three</a></li>' +
        '</ul>' +
        '</nav>'
    $(sectionHTML).appendTo('#qunit-fixture')

    var negativeHeight = -10
    var startOfSectionTwo = 101

    var scrollspyHTML = '<div id="content" style="height: 200px; overflow-y: auto;">' +
        '<div id="one" style="height: 100px;"/>' +
        '<div id="two" style="height: 100px;"/>' +
        '<div id="three" style="height: 100px;"/>' +
        '<div id="spacer" style="height: 100px;"/>' +
        '</div>'
    var $scrollspy = $(scrollspyHTML).appendTo('#qunit-fixture')

    $scrollspy
      .bootstrapScrollspy({
        target: '#navigation',
        offset: $scrollspy[0].offsetTop
      })
      .one('scroll', function () {
        assert.strictEqual($('.active').length, 1, '"active" class on only one element present')
        assert.strictEqual($('.active').is('#two-link'), true, '"active" class on second section')
        $scrollspy
          .one('scroll', function () {
            assert.strictEqual($('.active').length, 1, '"active" class on only one element present')
            assert.strictEqual($('.active').is('#one-link'), true, '"active" class on first section')
            done()
          })
          .scrollTop(negativeHeight)
      })
      .scrollTop(startOfSectionTwo)
  })

  QUnit.test('should correctly select navigation element on backward scrolling when each target section height is 100%', function (assert) {
    assert.expect(5)
    var navbarHtml =
      '<nav class="navbar">' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="li-100-1" class="nav-link" href="#div-100-1">div 1</a></li>' +
      '<li class="nav-item"><a id="li-100-2" class="nav-link" href="#div-100-2">div 2</a></li>' +
      '<li class="nav-item"><a id="li-100-3" class="nav-link" href="#div-100-3">div 3</a></li>' +
      '<li class="nav-item"><a id="li-100-4" class="nav-link" href="#div-100-4">div 4</a></li>' +
      '<li class="nav-item"><a id="li-100-5" class="nav-link" href="#div-100-5">div 5</a></li>' +
      '</ul>' +
      '</nav>'
    var contentHtml =
        '<div class="content" style="position: relative; overflow: auto; height: 100px">' +
      '<div id="div-100-1" style="position: relative; height: 100%; padding: 0; margin: 0">div 1</div>' +
      '<div id="div-100-2" style="position: relative; height: 100%; padding: 0; margin: 0">div 2</div>' +
      '<div id="div-100-3" style="position: relative; height: 100%; padding: 0; margin: 0">div 3</div>' +
      '<div id="div-100-4" style="position: relative; height: 100%; padding: 0; margin: 0">div 4</div>' +
      '<div id="div-100-5" style="position: relative; height: 100%; padding: 0; margin: 0">div 5</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')
    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '.navbar'
      })

    var testElementIsActiveAfterScroll = function (element, target) {
      var deferred = $.Deferred()
      // add top padding to fix Chrome on Android failures
      var paddingTop = 5
      var scrollHeight = Math.ceil($content.scrollTop() + $(target).position().top) + paddingTop
      $content.one('scroll', function () {
        assert.ok($(element).hasClass('active'), 'target:' + target + ', element: ' + element)
        deferred.resolve()
      })
      $content.scrollTop(scrollHeight)
      return deferred.promise()
    }

    var done = assert.async()
    $.when(testElementIsActiveAfterScroll('#li-100-5', '#div-100-5'))
      .then(function () {
        return testElementIsActiveAfterScroll('#li-100-4', '#div-100-4')
      })
      .then(function () {
        return testElementIsActiveAfterScroll('#li-100-3', '#div-100-3')
      })
      .then(function () {
        return testElementIsActiveAfterScroll('#li-100-2', '#div-100-2')
      })
      .then(function () {
        return testElementIsActiveAfterScroll('#li-100-1', '#div-100-1')
      })
      .then(function () {
        done()
      })
  })

  QUnit.test('should allow passed in option offset method: offset', function (assert) {
    assert.expect(4)

    var testOffsetMethod = function (type) {
      var $navbar = $(
        '<nav class="navbar"' + (type === 'data' ? ' id="navbar-offset-method-menu"' : '') + '>' +
        '<ul class="nav">' +
        '<li class="nav-item"><a id="li-' + type + 'm-1" class="nav-link" href="#div-' + type + 'm-1">div 1</a></li>' +
        '<li class="nav-item"><a id="li-' + type + 'm-2" class="nav-link" href="#div-' + type + 'm-2">div 2</a></li>' +
        '<li class="nav-item"><a id="li-' + type + 'm-3" class="nav-link" href="#div-' + type + 'm-3">div 3</a></li>' +
        '</ul>' +
        '</nav>'
      )
      var $content = $(
        '<div class="content"' + (type === 'data' ? ' data-spy="scroll" data-target="#navbar-offset-method-menu" data-offset="0" data-method="offset"' : '') + ' style="position: relative; overflow: auto; height: 100px">' +
        '<div id="div-' + type + 'm-1" style="position: relative; height: 200px; padding: 0; margin: 0">div 1</div>' +
        '<div id="div-' + type + 'm-2" style="position: relative; height: 150px; padding: 0; margin: 0">div 2</div>' +
        '<div id="div-' + type + 'm-3" style="position: relative; height: 250px; padding: 0; margin: 0">div 3</div>' +
        '</div>'
      )

      $navbar.appendTo('#qunit-fixture')
      $content.appendTo('#qunit-fixture')

      if (type === 'js') {
        $content.bootstrapScrollspy({
          target: '.navbar',
          offset: 0,
          method: 'offset'
        })
      } else if (type === 'data') {
        window.dispatchEvent(new Event('load'))
      }

      var $target = $('#div-' + type + 'm-2')
      var scrollspy = ScrollSpy._getInstance($content[0])

      assert.ok(scrollspy._offsets[1] === $target.offset().top, 'offset method with ' + type + ' option')
      assert.ok(scrollspy._offsets[1] !== $target.position().top, 'position method with ' + type + ' option')
      $navbar.remove()
      $content.remove()
    }

    testOffsetMethod('js')
    testOffsetMethod('data')
  })

  QUnit.test('should allow passed in option offset method: position', function (assert) {
    assert.expect(4)

    var testOffsetMethod = function (type) {
      var $navbar = $(
        '<nav class="navbar"' + (type === 'data' ? ' id="navbar-offset-method-menu"' : '') + '>' +
        '<ul class="nav">' +
        '<li class="nav-item"><a class="nav-link" id="li-' + type + 'm-1" href="#div-' + type + 'm-1">div 1</a></li>' +
        '<li class="nav-item"><a class="nav-link" id="li-' + type + 'm-2" href="#div-' + type + 'm-2">div 2</a></li>' +
        '<li class="nav-item"><a class="nav-link" id="li-' + type + 'm-3" href="#div-' + type + 'm-3">div 3</a></li>' +
        '</ul>' +
        '</nav>'
      )
      var $content = $(
        '<div class="content"' + (type === 'data' ? ' data-spy="scroll" data-target="#navbar-offset-method-menu" data-offset="0" data-method="position"' : '') + ' style="position: relative; overflow: auto; height: 100px">' +
        '<div id="div-' + type + 'm-1" style="position: relative; height: 200px; padding: 0; margin: 0">div 1</div>' +
        '<div id="div-' + type + 'm-2" style="position: relative; height: 150px; padding: 0; margin: 0">div 2</div>' +
        '<div id="div-' + type + 'm-3" style="position: relative; height: 250px; padding: 0; margin: 0">div 3</div>' +
        '</div>'
      )

      $navbar.appendTo('#qunit-fixture')
      $content.appendTo('#qunit-fixture')

      if (type === 'js') {
        $content.bootstrapScrollspy({
          target: '.navbar',
          offset: 0,
          method: 'position'
        })
      } else if (type === 'data') {
        window.dispatchEvent(new Event('load'))
      }

      var $target = $('#div-' + type + 'm-2')
      var scrollspy = ScrollSpy._getInstance($content[0])

      assert.ok(scrollspy._offsets[1] !== $target.offset().top, 'offset method with ' + type + ' option')
      assert.ok(scrollspy._offsets[1] === $target.position().top, 'position method with ' + type + ' option')
      $navbar.remove()
      $content.remove()
    }

    testOffsetMethod('js')
    testOffsetMethod('data')
  })

  QUnit.test('should return the version', function (assert) {
    assert.expect(1)
    assert.strictEqual(typeof ScrollSpy.VERSION, 'string')
  })
})
