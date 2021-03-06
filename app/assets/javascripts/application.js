// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require 'app'
//= require 'pages'
//= require 'slice'
//= require 'slice_manager'
//= require 'lists'
//= require 'settings'
//= require 'list_shares'
//= require 'list_organizer'
//= require 'user'
//= require 'clone'
//= require 'preferences'

$(document).ajaxSend(function(e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});
