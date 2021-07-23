<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover">

        <title>Test</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="https://use.typekit.net/ojz4vei.css">
        <link href="{{ asset('css/bootstrap-reboot.min.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>
    <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</html>
