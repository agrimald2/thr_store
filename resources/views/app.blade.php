<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Metatags -->
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <meta name="title" content="THR | CORPORATION">
        <meta name="description" content="Somos líderes en el suministro de equipos y repuestos mineros de primera calidad. Somos líderes en el suministro de equipos y repuestos mineros.">
        <meta name="keywords" content="equipos mineros, repuestos mineros, soluciones mineras, eficiencia operacional, productividad minera, operación minera, socio minero confiable, industria minera, suministro minero, tecnología minera">
        <meta name="robots" content="index, follow">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="language" content="Spanish">
       
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/2780e63ff4.js" crossorigin="anonymous"></script>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
