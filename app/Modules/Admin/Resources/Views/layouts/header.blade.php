<!DOCTYPE html>
<html lang="{{ \App::getLocale() }}">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!-- Meta, title, CSS, favicons, etc. -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>@yield('title')</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<!-- Bootstrap core CSS -->

	<link href="{{ asset('/modules/css/bootstrap.min.css') }}" rel="stylesheet">

	<link href="{{ asset('/modules/fonts/css/font-awesome.min.css') }}" rel="stylesheet">
	<link href="{{ asset('/modules/css/animate.min.css') }}" rel="stylesheet">

	<!-- Custom styling plus plugins -->
	<link href="{{ asset('/modules/css/custom.css') }}" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="{{ asset('/modules/css/maps/jquery-jvectormap-2.0.3.css') }}"/>
	<link href="{{ asset('/modules/css/icheck/flat/green.css') }}" rel="stylesheet"/>
	<link href="{{ asset('/modules/css/floatexamples.css') }}" rel="stylesheet" type="text/css"/>

	<link href="{{ asset('/modules/css/select/select2.min.css') }}" rel="stylesheet">

	<script src="{{ asset('/modules/js/jquery.min.js') }}"></script>
	<script src="{{ asset('/modules/js/nprogress.js') }}"></script>

	<!--[if lt IE 9]>
	<script src="{{ asset('../assets/js/ie8-responsive-file-warning.js') }}"></script>
	<![endif]-->

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<script src="{{ asset('/modules/js/tinymce/moxiemanager/js/moxman.loader.min.js') }}"></script>
	<script src="{{ asset('/modules/js/tinymce/tinymce.min.js') }}"></script>
	<script>
		tinymce.PluginManager.load('moxiemanager', '/modules/js/tinymce/moxiemanager/plugin.min.js');

		tinymce.init({
			selector: ".area",

			plugins: [
				"advlist autolink lists link image charmap print preview anchor",
				"searchreplace visualblocks code fullscreen",
				"insertdatetime media table contextmenu paste moxiemanager",
				" emoticons imagetools fullscreen"
			],

			toolbar: "fullscreen insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | fontselect fontsizeselect"
			+ 'print preview media | emoticons ',

				imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],

			image_class_list: [
				{title: 'None', value: ''},
				{title: 'Clear', value: 'clear'},
				{title: 'Thumbnail', value: 'thumbnail'}
			],

			class_list: [
				{title: 'None', value: ''},
				{title: 'Clear', value: 'clear'},
				{title: 'Thumbnail', value: 'thumbnail'}
			],

			menubar: true,
			image_advtab: true,
			image_dimensions: true,
			// image_prepend_url: "/",
			document_base_url: "/",
			relative_urls: false,
			language: "{{ \App::getLocale() }}",
			font_formats: "Andale Mono=andale mono,times;" +
			"Arial=arial,helvetica,sans-serif;" +
			"Arial Black=arial black,avant garde;" +
			"Book Antiqua=book antiqua,palatino;" +
			"Comic Sans MS=comic sans ms,sans-serif;" +
			"Courier New=courier new,courier;" +
			"Georgia=georgia,palatino;" +
			"Helvetica=helvetica;" +
			"Impact=impact,chicago;" +
			"Symbol=symbol;" +
			"Tahoma=tahoma,arial,helvetica,sans-serif;" +
			"Terminal=terminal,monaco;" +
			"Times New Roman=times new roman,times;" +
			"Trebuchet MS=trebuchet ms,geneva;" +
			"Verdana=verdana,geneva;" +
			"Webdings=webdings;" +
			"Wingdings=wingdings,zapf dingbats"
		});

		tinymce.init({
			selector: ".area_min",
			menubar: false,
			language: "{{ \App::getLocale() }}",
		});
	</script>


	<script src="{{ asset('/modules/js/code_editor/lib/codemirror.js') }}"></script>
	<link rel="stylesheet" href="{{ asset('/modules/js/code_editor/lib/codemirror.css') }}">
	<script src="{{ asset('/modules/js/code_editor/addon/edit/matchbrackets.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/htmlmixed/htmlmixed.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/xml/xml.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/javascript/javascript.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/css/css.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/clike/clike.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/php/php.js') }}"></script>
	<script src="{{ asset('/modules/js/code_editor/mode/markdown/markdown.js') }}"></script>

	<style type="text/css">
		.CodeMirror {
			border-top: 1px solid black;
			border-bottom: 1px solid black;
		}
	</style>

	<link href="/css/admin_site.css" rel="stylesheet" type="text/css"/>
	<script src="{{ asset('/modules/js/adm.js') }}"></script>

	<script>
		$(document).ready(function() {
			$.adm.initialize({
				url_req: '/'
			});
		})
	</script>

	@yield('header')
	@stack('header')
</head>
<body class="nav-md">
<div class="container body">
	<div class="main_container">